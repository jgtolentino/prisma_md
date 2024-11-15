import type { AnalysisResults } from '@/types/analysis';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

export async function analyzeResearchTopic(topic: string): Promise<AnalysisResults> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/analyze-topic`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ topic }),
    });

    if (!response.ok) {
      throw new ApiError(
        response.status,
        response.status === 429 
          ? 'Too many requests. Please try again later.'
          : 'Failed to analyze topic. Please try again.'
      );
    }

    return await response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(500, 'Network error. Please check your connection.');
  }
}