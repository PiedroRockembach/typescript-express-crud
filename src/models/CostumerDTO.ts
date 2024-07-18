
export interface Costumer {
    cpf: number;
    name: string;
    password: string;
    active: boolean;

}
export interface CostumerDTO {
    cpf: number;
    name: string;
}
// CREATE TABLE `customers` (
//     `cpf` INT NOT NULL AUTO_INCREMENT UNIQUE,
//     `name` VARCHAR(255) NOT NULL,
//     `password` VARCHAR(255) NOT NULL,
//     `active` BOOLEAN NOT NULL,
//     PRIMARY KEY (`cpf`)
// );