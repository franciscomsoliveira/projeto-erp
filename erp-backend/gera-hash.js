import bcrypt from "bcrypt";

const senha = "123456";
const hash = await bcrypt.hash(senha, 10);

console.log(hash);
