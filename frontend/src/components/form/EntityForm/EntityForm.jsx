import { Input, Select, Switch, Textarea } from "../../ui";
import { FormBody, FormFooter, FormLayout } from "../FormLayout";
import { FormField } from "../FormField";
import { FormGrid } from "../FormGrid";
import { FormSection } from "../FormSection";

export function EntityForm({
  title = "Cadastro",
  description = "Preencha as informações abaixo para salvar o registro.",
  children,
  onSubmit,
  onCancel,
  loading = false,
  disabled = false,
  submitLabel = "Salvar cadastro",
  cancelLabel = "Cancelar",
  actions,
  maxWidth,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit?.(event);
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormLayout
        title={title}
        description={description}
        actions={actions}
        maxWidth={maxWidth}
        footer={
          <FormFooter
            onCancel={onCancel}
            submitLabel={submitLabel}
            cancelLabel={cancelLabel}
            loading={loading}
            disabled={disabled}
          />
        }
      >
        <FormBody>{children}</FormBody>
      </FormLayout>
    </form>
  );
}

export function EntityFormExample() {
  return (
    <EntityForm title="Cadastro de usuário" description="Modelo base usando components/ui + components/form.">
      <FormSection title="Dados principais" description="Informações básicas do usuário.">
        <FormGrid columns={2}>
          <FormField label="Nome" required>
            <Input placeholder="Digite o nome completo" />
          </FormField>

          <FormField label="E-mail" required helperText="Use o e-mail de acesso ao sistema.">
            <Input type="email" placeholder="usuario@email.com" />
          </FormField>

          <FormField label="Perfil">
            <Select
              placeholder="Selecione um perfil"
              options={[
                { label: "Administrador", value: "admin" },
                { label: "Gerente", value: "gerente" },
                { label: "Operador", value: "operador" },
              ]}
            />
          </FormField>

          <FormField label="Estabelecimento">
            <Select
              placeholder="Selecione uma unidade"
              options={[
                { label: "Matriz", value: "matriz" },
                { label: "Filial", value: "filial" },
              ]}
            />
          </FormField>
        </FormGrid>
      </FormSection>

      <FormSection title="Configurações">
        <FormGrid columns={2}>
          <FormField helperText="Permite login e uso normal do sistema.">
            <Switch label="Usuário ativo" defaultChecked />
          </FormField>

          <FormField helperText="Libera acesso a áreas administrativas.">
            <Switch label="Acesso administrativo" />
          </FormField>
        </FormGrid>
      </FormSection>

      <FormSection title="Observações">
        <FormField helperText="Campo opcional para controle interno.">
          <Textarea placeholder="Adicione observações internas..." />
        </FormField>
      </FormSection>
    </EntityForm>
  );
}
