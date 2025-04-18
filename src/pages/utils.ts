// utils.ts
export function generateRandomCode(length = 4): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  }
  
  export function generateRandomName(): string {
    const prefixes = ['Test'];
    const suffix = Math.floor(Math.random() * 1000);
    return `${prefixes[Math.floor(Math.random() * prefixes.length)]} ${suffix}`;
  }
  
  export function generateRandomPhone(): string {
    const prefix = ['06', '08', '09'][Math.floor(Math.random() * 3)];
    const middle = Math.floor(1000000 + Math.random() * 9000000).toString();
    return `${prefix}${middle}`;
  }
  