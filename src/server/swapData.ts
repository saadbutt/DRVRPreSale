import fs from 'fs';
import path from 'path';

interface SwapRequest {
  transactionHash: string;
  solanaAddress: string;
  timestamp: string;
}

const SWAP_DATA_FILE = path.join(process.cwd(), 'swap-requests.json');

export function saveSwapRequest(data: SwapRequest) {
  let existingData: SwapRequest[] = [];
  
  // Read existing data if file exists
  if (fs.existsSync(SWAP_DATA_FILE)) {
    const fileContent = fs.readFileSync(SWAP_DATA_FILE, 'utf-8');
    existingData = JSON.parse(fileContent);
  }
  
  // Add new request
  existingData.push(data);
  
  // Save updated data
  fs.writeFileSync(SWAP_DATA_FILE, JSON.stringify(existingData, null, 2));
  
  return true;
}