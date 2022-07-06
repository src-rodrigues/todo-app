const createTableSql = `
CREATE TABLE \`lab\`.\`todo\` (
  \`id\` INT NOT NULL,
  \`desc\` VARCHAR(100) NOT NULL,
  \`ativo\` BIT(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (\`id\`));
`;