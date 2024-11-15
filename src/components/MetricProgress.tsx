import React from 'react';
import { Progress } from '@/components/ui/progress';

interface MetricProgressProps {
  label: string;
  value: number;
}

export const MetricProgress = ({ label, value }: MetricProgressProps) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <Progress value={value} className="h-2" />
  </div>
);