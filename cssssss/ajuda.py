# Definindo um dicionário com informações de ajuda
ajuda = {
    "comando1": "Descrição do comando 1.",
    "comando2": "Descrição do comando 2.",
    "comando3": "Descrição do comando 3.",
    "ajuda": "Mostra ajuda sobre os comandos disponíveis."
}

# Função para exibir ajuda
def exibir_ajuda(comando=None):
    if comando is None:
        # Mostra todos os comandos disponíveis
        print("Comandos disponíveis:")
        for key in ajuda:
            print(f"- {key}")
        print("\nPara obter ajuda sobre um comando específico, digite 'ajuda <comando>'.")
    else:
        # Mostra ajuda específica para um comando
        if comando in ajuda:
            print(f"Ajuda para '{comando}':")
            print(ajuda[comando])
        else:
            print(f"Comando '{comando}' não encontrado. Digite 'ajuda' para ver todos os comandos disponíveis.")

# Loop principal para interação com o usuário
while True:
    entrada = input("Digite um comando (ou 'ajuda' para ver os comandos disponíveis): ").strip().lower()
    
    if entrada == "sair":
        print("Saindo do sistema de ajuda.")
        break
    elif entrada.startswith("ajuda"):
        partes = entrada.split(maxsplit=1)
        if len(partes) == 1:
            exibir_ajuda()
        else:
            exibir_ajuda(partes[1])
    else:
        print(f"Comando '{entrada}' não reconhecido. Digite 'ajuda' para ver os comandos disponíveis.")
