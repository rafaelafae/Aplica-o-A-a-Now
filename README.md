# Açaí Now Delivery - ServiceNow Application

Este repositório contém um exemplo de uma aplicação desenvolvida na plataforma ServiceNow utilizando o App Engine. A aplicação **Açaí Now Delivery** foi criada para gerenciar pedidos de açaí, sugestões e reclamações, com várias funcionalidades integradas para melhorar a experiência do usuário.

## Descrição

A aplicação **Açaí Now Delivery** inclui:

- **Portal Personalizado:** Um portal exclusivo criado para a aplicação, permitindo que os usuários façam pedidos, enviem sugestões e reclamações de forma fácil e intuitiva.
- **Formulários no ServicePortal:** Dois formulários personalizados para o portal, um para pedidos de açaí e outro para sugestões/reclamações.
- **Workspace Personalizado:** Um espaço de trabalho dedicado para gerenciar os pedidos e feedbacks de forma eficiente.
- **Dashboard:** Um painel que exibe métricas e gráficos sobre pedidos e interações, permitindo uma visão clara e rápida do desempenho da aplicação.

### Funcionalidades Integradas

- **Integração com API de CEP:** Consulta de CEP através de uma API para facilitar o preenchimento automático de endereços.
- **Uso de iMask:** Implementação de máscaras para formatação de campos de telefone e CEP, garantindo a padronização dos dados inseridos.
- **Mensagens Personalizadas:** Exibição de mensagens customizadas ao enviar formulários, melhorando a comunicação com o usuário.
- **Integração com Slack:** Notificações automáticas para o time via Slack, informando sobre a abertura de novas solicitações, sugestões ou reclamações.

## Estrutura do Projeto

- **App Engine:** Desenvolvimento da lógica principal da aplicação.
- **ServicePortal:** Implementação dos formulários e do portal personalizado.
- **Workspace:** Configuração do espaço de trabalho para gerenciamento dos pedidos e feedbacks.
- **Dashboard:** Criação de gráficos e métricas para acompanhamento da aplicação.
- **Integrações:** Implementação das integrações com a API de CEP, iMask, e Slack.

## Como Utilizar

## Configurações no ServiceNow

### Script Include e API de CEP

1. Navegue até **System Definition > Script Includes** no ServiceNow.
2. Crie um novo **Script Include** para integrar a API de consulta de CEP.
3. Adicione a lógica de consulta à API dentro do Script Include, garantindo que ele esteja configurado para ser acessível globalmente.

### Configuração do iMask

1. Nos formulários do **ServicePortal**, localize os campos de telefone e CEP.
2. Configure o **iMask** para aplicar máscaras de formatação nesses campos, assegurando que os dados sejam inseridos no formato correto.

### Configuração de Notificações no Slack

1. Integre o **Slack** com o ServiceNow para permitir notificações automáticas.
2. Configure as notificações para alertar o time sempre que um novo pedido, sugestão ou reclamação for registrado.

### Personalização do Portal e Formulários

1. Configure o **Portal Personalizado** no ServiceNow para refletir o branding e as funcionalidades da aplicação **Açaí Now Delivery**.
2. Personalize os formulários para coleta de pedidos e feedbacks, garantindo que estejam alinhados com as necessidades do projeto.

## Vídeo de Demonstração

Assista ao vídeo de demonstração para ver a aplicação em ação:

[![Demonstração do Açaí Now Delivery](https://img.youtube.com/vi/_7g71GxNRc8/maxresdefault.jpg)](https://youtu.be/_7g71GxNRc8)


**Clone o Repositório**

   ```bash
   git clone https://github.com/rafaelafae/Acai-Now-Delivery.git
