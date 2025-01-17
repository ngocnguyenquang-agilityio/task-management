import { z } from 'zod';

// Constants
import {
  TASK_PRIORITY_VALUE,
  TASK_STATUS_VALUE,
  TaskFormDataSchema,
} from '@/constants';

// Models
import { BaseEntity, CustomStateType, ResponseStateType } from './base';

export type TaskFormType = z.infer<typeof TaskFormDataSchema>;

export type TaskFormState = {
  formErrors?: {
    title?: string[];
    slug?: string[];
    status?: string[];
    description?: string[];
    dueDate?: string[];
    priority?: string[];
    assignedTo?: string[];
    projectId?: string[];
    image?: string[];
  };
} & CustomStateType &
  Partial<ResponseStateType<Task | null>>;

export type Task = BaseEntity & {
  slug: string;
  dueDate: Date | string;
  status: TASK_STATUS_VALUE;
  priority: TASK_PRIORITY_VALUE;
  assignedTo: string;
  projectId: string;
};

export type TaskStatisticResponse = {
  label: string;
  total: number;
};

export type TaskStatisticQueryParam = {
  field: string;
  value: string;
};
