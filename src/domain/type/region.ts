export type requestState = {
  id: number;
  sigla: string;
  nome: string;
  regiao: Region;
};

type Region = {
  id: number;
  sigla: string;
  nome: string;
};
