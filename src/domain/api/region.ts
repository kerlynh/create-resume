import axios from "axios";
import { adapterRegionResponse } from "../adapter/region";

export async function fetchRegion() {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_REGION_URL!);
    return adapterRegionResponse(response.data);
  } catch (error) {
    throw error;
  }
}
