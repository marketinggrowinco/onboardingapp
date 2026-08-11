import { X } from 'lucide-react';
import { TrailItem } from '../data/trails';

interface ContentModalProps {
  item: TrailItem;
  onClose: () => void;
}

// Função para processar texto com links e negrito
function processTextWithLinks(text: string): string {
  // Primeiro processa negrito
  let processed = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Processa links em formato markdown [texto](url)
  processed = processed.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-orange-600 underline hover:text-orange-700 font-medium">$1</a>'
  );
  
  // Processa links simples (URLs soltas), mas apenas as que NÃO estão dentro de href=""
  // Usa negative lookbehind para evitar pegar URLs que já estão dentro de href
  processed = processed.replace(
    /(?<!href=")(https?:\/\/[^\s<]+)(?!")/g,
    (match) => {
      // Verifica se não está dentro de uma tag <a>
      return `<a href="${match}" target="_blank" rel="noopener noreferrer" class="text-orange-600 underline hover:text-orange-700 font-medium">${match}</a>`;
    }
  );
  
  return processed;
}

export function ContentModal({ item, onClose }: ContentModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-gray-200">
          <div className="flex-1 pr-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h2>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {item.content ? (
            <div className="prose prose-orange max-w-none">
              {item.content.split('\n').map((line, index) => {
                // Handle headings
                if (line.startsWith('# ')) {
                  return (
                    <h1 key={index} className="text-3xl font-bold text-gray-900 mb-4 mt-6">
                      {line.replace('# ', '')}
                    </h1>
                  );
                }
                if (line.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-gray-900 mb-3 mt-6">
                      {line.replace('## ', '')}
                    </h2>
                  );
                }
                if (line.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-bold text-gray-900 mb-2 mt-4">
                      {line.replace('### ', '')}
                    </h3>
                  );
                }
                
                // Handle bullet points
                if (line.startsWith('- ')) {
                  return (
                    <li 
                      key={index} 
                      className="ml-6 mb-2 text-gray-700"
                      dangerouslySetInnerHTML={{
                        __html: processTextWithLinks(line.replace('- ', ''))
                      }}
                    />
                  );
                }
                
                // Handle bold text
                if (line.includes('**')) {
                  return (
                    <p 
                      key={index} 
                      className="mb-3 text-gray-700"
                      dangerouslySetInnerHTML={{
                        __html: processTextWithLinks(line)
                      }}
                    />
                  );
                }
                
                // Handle empty lines
                if (line.trim() === '') {
                  return <div key={index} className="h-2" />;
                }
                
                // Regular paragraph - também processa links
                return (
                  <p 
                    key={index} 
                    className="mb-3 text-gray-700"
                    dangerouslySetInnerHTML={{
                      __html: processTextWithLinks(line)
                    }}
                  />
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">Conteúdo em desenvolvimento</p>
              <p className="text-sm text-gray-400">Este material estará disponível em breve.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-6 bg-gray-50">
          <button
            onClick={onClose}
            className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}