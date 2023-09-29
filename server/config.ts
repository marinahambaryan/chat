import * as dotenv from 'dotenv';
dotenv.config();

interface ConfigProps {
  PORT: number;
  CLIENT_URL: string;
}

export const configProps: ConfigProps = {
  PORT: parseInt(process.env.PORT) || 8080,
  CLIENT_URL: process.env.CLIENT_URL,
};
