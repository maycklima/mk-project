export enum TipoMovimentacao {
	ENTRADA = 'Entrada',
	SAIDA = 'Saída',
}

export const descricaoPorChave: Record<string, string> = {
	'ENTRADA': 'Entrada',
	'SAIDA': 'Saída',
  };
  
export function buscarPorChave(chave: string): string | null {
	return descricaoPorChave[chave] || null;
}