import { z } from 'zod';

// Constants
import { ERROR_MESSAGES } from './messages';
import { isRequired, isValidFormat } from '../utils/validators';
import { MIN_LENGTH, REGEX_EMAIL } from './validators';

// Utils
import { generatePasswordRegex } from '@/utils/password';

export const UserSigninFormDataSchema = z.object({
  email: z.string().refine(isRequired, ERROR_MESSAGES.FIELD_REQUIRED),
  password: z.string().refine(isRequired, ERROR_MESSAGES.FIELD_REQUIRED),
});

export const UserSignupFormDataSchema = z
  .object({
    username: z
      .string()
      .min(
        MIN_LENGTH.USERNAME,
        ERROR_MESSAGES.MIN_LENGTH('Username', MIN_LENGTH.USERNAME),
      ),
    email: z
      .string()
      .min(1, ERROR_MESSAGES.FIELD_REQUIRED)
      .refine(
        (value) => isValidFormat(value, REGEX_EMAIL),
        ERROR_MESSAGES.FORMAT('Email'),
      ),
    password: z
      .string()
      .min(
        MIN_LENGTH.PASSWORD,
        ERROR_MESSAGES.MIN_LENGTH('Password', MIN_LENGTH.PASSWORD),
      )
      .regex(generatePasswordRegex(8), ERROR_MESSAGES.PASSWORD_NOT_MATCH_REGEX),
    passwordConfirmation: z
      .string()
      .refine(isRequired, ERROR_MESSAGES.FIELD_REQUIRED),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: ERROR_MESSAGES.PASSWORD_NOT_MATCH,
    path: ['passwordConfirmation'],
  });

export const ProjectFormDataSchema = z.object({
  title: z.string().refine(isRequired, ERROR_MESSAGES.FIELD_REQUIRED),
  slug: z.string().refine(isRequired, ERROR_MESSAGES.FIELD_REQUIRED),
  description: z.string().refine(isRequired, ERROR_MESSAGES.FIELD_REQUIRED),
  image: z.string().url().optional().or(z.literal('')),
  isPublic: z.boolean(),
  memberIds: z.string().array().min(1, ERROR_MESSAGES.FIELD_REQUIRED),
});

export const TaskFormDataSchema = z.object({
  title: z.string().refine(isRequired, ERROR_MESSAGES.FIELD_REQUIRED),
  slug: z.string().refine(isRequired, ERROR_MESSAGES.FIELD_REQUIRED),
  description: z.string().refine(isRequired, ERROR_MESSAGES.FIELD_REQUIRED),
  image: z.string().url().optional().or(z.literal('')),
  dueDate: z.coerce.date(),
  status: z.string().refine(isRequired, ERROR_MESSAGES.FIELD_REQUIRED),
  priority: z.string().refine(isRequired, ERROR_MESSAGES.FIELD_REQUIRED),
  assignedTo: z.string().refine(isRequired, ERROR_MESSAGES.FIELD_REQUIRED),
  projectId: z.string().refine(isRequired, ERROR_MESSAGES.FIELD_REQUIRED),
});

export const ParticipationFormDataSchema = z.object({
  memberIds: z.string().array().min(1, ERROR_MESSAGES.FIELD_REQUIRED),
});
