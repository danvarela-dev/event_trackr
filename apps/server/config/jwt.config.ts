import { SetMetadata } from '@nestjs/common';

export const jwt_secret =
  '3d389a3051558ba0a417f1ce5e35f13aa0d2f6d657428c52325e75b436504b03';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
