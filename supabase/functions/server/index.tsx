import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { createClient } from "npm:@supabase/supabase-js";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-6924fec6/health", async (c) => {
  try {
    // Generate real database activity to prevent project pausing
    const timestamp = new Date().toISOString();
    const healthKey = "system:health-check";
    
    // Write to database to ensure activity
    await kv.set(healthKey, {
      lastCheck: timestamp,
      status: "active",
    });
    
    // Read back to confirm database is working
    const healthData = await kv.get(healthKey);
    
    return c.json({ 
      status: "ok",
      timestamp,
      database: "active",
      lastCheck: healthData?.lastCheck || timestamp,
    });
  } catch (error) {
    console.error("Health check error:", error);
    return c.json({ 
      status: "error", 
      message: error.message,
      timestamp: new Date().toISOString(),
    }, 500);
  }
});

// Save user progress
app.post("/make-server-6924fec6/progress", async (c) => {
  try {
    const body = await c.req.json();
    const { userName, userEmail, userTeam, generalProgress, teamProgress } = body;
    
    if (!userEmail) {
      return c.json({ error: "userEmail is required" }, 400);
    }
    
    // Use email as the primary identifier instead of name
    const userId = userEmail.toLowerCase().replace(/[^a-z0-9@._-]/g, '-');
    const progressKey = `user:${userId}:progress`;
    
    const progressData = {
      userName,
      userEmail: userEmail,
      userTeam: userTeam || null,
      generalProgress: generalProgress || {},
      teamProgress: teamProgress || {},
      lastUpdated: new Date().toISOString(),
    };
    
    await kv.set(progressKey, progressData);
    
    return c.json({ 
      success: true,
      message: "Progress saved successfully",
      userId,
    });
  } catch (error) {
    console.error("Error saving progress:", error);
    return c.json({ 
      error: "Failed to save progress",
      message: error.message,
    }, 500);
  }
});

// Get all users and their progress (admin endpoint)
app.get("/make-server-6924fec6/admin/users", async (c) => {
  try {
    // Check if environment variables are set
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    
    if (!supabaseUrl || !supabaseKey) {
      console.error("Missing Supabase credentials");
      return c.json({ 
        error: "Server configuration error",
        message: "Missing Supabase credentials",
      }, 500);
    }
    
    // Get all user progress entries directly from database
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    const { data, error } = await supabase
      .from("kv_store_6924fec6")
      .select("key, value")
      .like("key", "user:%:progress");
    
    if (error) {
      console.error("Database error:", error);
      throw new Error(error.message || "Database query failed");
    }
    
    // Map the data to user objects
    const users = (data || []).map(entry => ({
      userId: entry.key.replace('user:', '').replace(':progress', ''),
      ...entry.value,
    }));
    
    // Sort by last updated (most recent first)
    users.sort((a, b) => {
      const dateA = new Date(a.lastUpdated || 0).getTime();
      const dateB = new Date(b.lastUpdated || 0).getTime();
      return dateB - dateA;
    });
    
    return c.json({ 
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return c.json({ 
      error: "Failed to fetch users",
      message: error instanceof Error ? error.message : "Unknown error",
    }, 500);
  }
});

Deno.serve(app.fetch);