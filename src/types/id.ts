import { v1 as uuidv4 } from 'uuid';

export type Id = ReturnType<typeof uuidv4>;
