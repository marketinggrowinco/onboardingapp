export interface UserProgress {
  email: string; // Primary identifier - now required
  displayName: string; // How the user wants to be called
  team: string;
  completedItems: string[];
  createdAt: string;
  lastUpdated: string;
}

const STORAGE_KEY = 'onboarding_progress';
const API_URL = '/api';

// Lista de emails com acesso administrativo
const ADMIN_EMAILS = [
  'mariane.monteiro@growinco.com',
  'victor.hadad@growinco.com',
];

// Check if user is admin
export function isUserAdmin(): boolean {
  const progress = getUserProgress();
  if (!progress || !progress.email) return false;
  return ADMIN_EMAILS.includes(progress.email.toLowerCase().trim());
}

// Helper function to sync progress to backend
async function syncToBackend(progress: UserProgress): Promise<void> {
  try {
    // Separate general and team-specific completed items
    const generalProgress: Record<string, boolean> = {};
    const teamProgress: Record<string, boolean> = {};
    
    progress.completedItems.forEach(itemId => {
      if (itemId.startsWith('general-')) {
        generalProgress[itemId] = true;
      } else {
        teamProgress[itemId] = true;
      }
    });
    
    const response = await fetch(`${API_URL}/progress`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: progress.displayName,
        userEmail: progress.email,
        userTeam: progress.team,
        generalProgress,
        teamProgress,
      }),
    });
    
    if (!response.ok) {
      console.warn('Failed to sync progress to backend:', await response.text());
    }
  } catch (error) {
    console.warn('Error syncing to backend (will continue with localStorage):', error);
  }
}

export function saveUserProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    // Sync to backend asynchronously (don't wait for it)
    syncToBackend(progress).catch(err => console.warn('Background sync failed:', err));
  } catch (error) {
    console.error('Error saving progress:', error);
  }
}

export function getUserProgress(): UserProgress | null {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error loading progress:', error);
  }
  return null;
}

export function clearUserProgress(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing progress:', error);
  }
}

export function toggleItemCompletion(itemId: string): string[] | null {
  const progress = getUserProgress();
  if (!progress) return null;

  const completedItems = progress.completedItems || [];
  const index = completedItems.indexOf(itemId);

  if (index > -1) {
    completedItems.splice(index, 1);
  } else {
    completedItems.push(itemId);
  }

  const updatedProgress: UserProgress = {
    ...progress,
    completedItems,
    lastUpdated: new Date().toISOString(),
  };

  saveUserProgress(updatedProgress);
  return completedItems;
}

export function calculateProgress(totalItems: number, completedItems: number): number {
  if (totalItems === 0) return 0;
  return Math.round((completedItems / totalItems) * 100);
}

export function getUserInfo() {
  return getUserProgress();
}

export function getCompletedItems(): string[] {
  const progress = getUserProgress();
  return progress?.completedItems || [];
}

export function saveCompletedItems(items: string[]): void {
  const progress = getUserProgress();
  if (progress) {
    const updatedProgress: UserProgress = {
      ...progress,
      completedItems: items,
      lastUpdated: new Date().toISOString(),
    };
    saveUserProgress(updatedProgress);
  }
}