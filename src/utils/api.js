import { PROXY_URL } from './constants';

export const fetchWithRetry = async (url, retries = 3) => {
    let lastError;
    
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(PROXY_URL + url, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            return data;
        } catch (error) {
            lastError = error;
            if (i === retries - 1) break;
            // Wait for 1 second before retrying
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    
    throw lastError;
};