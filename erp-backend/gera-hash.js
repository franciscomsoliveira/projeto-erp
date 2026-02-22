import bcrypt from "bcrypt";

const senha = "1802";
const hash = await bcrypt.hash(senha, 10);

console.log(hash);
