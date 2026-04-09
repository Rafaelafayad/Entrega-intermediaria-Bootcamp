function resetarLista(lista) {
  return lista.map(() => false);
}

test("deve resetar todos os itens para falso", () => {
  const lista = [true, true, false];
  const resultado = resetarLista(lista);
  expect(resultado).toEqual([false, false, false]);
});