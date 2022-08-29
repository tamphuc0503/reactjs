const world = 'world';
export function hello(who: string = world): string {
  return `Hello ${who}! `;
}
const ret = hello('me');
console.log(ret);