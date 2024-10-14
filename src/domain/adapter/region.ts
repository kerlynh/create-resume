import { requestState } from "../type/region";

export function adapterRegionResponse(response: requestState[]): string[] {
  const states = response.map((alias) => alias.sigla).sort();
  return states;
}
