// src/pages/Usuarios/Usuarios.jsx
import { useEffect, useMemo, useState } from "react";
import * as Fi from "react-icons/fi";

import { PageHeader } from "../../components/layout";
import { Button, Card, Input, Select } from "../../components/ui";

import { FormSection, FormGrid, FormField } from "../../components/form";

import { api } from "../../services/api";
import { useAuth } from "../../context/AuthContext";
import { StatusBadge, TableWrap } from "./styles";

export function Usuarios() {
  const [activeTab, setActiveTab] = useState("dados");
  const [loading, setLoading] = useState(false);

  const [lojas, setLojas] = useState([]);
  const [perfis, setPerfis] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  const { user } = useAuth();

  const [loginLoading, setLoginLoading] = useState(false);

  const [loginExists, setLoginExists] = useState(false);

  const [form, setForm] = useState({
    nome: "",
    login: "",
    email: "",
    senha: "123456",
    status: "ATIVO",
    loja_id: "",
    perfil_id: "",
  });

  const errors = useMemo(() => {
    const lista = [];

    if (!form.nome) lista.push("Nome obrigatório");
    if (!form.login) lista.push("Login obrigatório");
    if (!form.email) lista.push("E-mail obrigatório");
    if (!form.loja_id) lista.push("Loja obrigatória");
    if (!form.perfil_id) lista.push("Perfil obrigatório");

    return lista;
  }, [form]);

  async function carregarDados() {
    setLoading(true);

    try {
      const [lojasResponse, perfisResponse, usuariosResponse] =
        await Promise.all([
          api.get("/lojas/select"),
          api.get("/perfis/select"),
          api.get("/usuarios"),
        ]);

      setLojas(lojasResponse.data);
      setPerfis(perfisResponse.data);
      setUsuarios(usuariosResponse.data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarDados();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleClear() {
    setForm({
      nome: "",
      login: "",
      email: "",
      senha: "123456",
      status: "ATIVO",
      loja_id: "",
      perfil_id: "",
    });

    setActiveTab("dados");
  }

  function gerarLogin(nomeCompleto) {
    const nomes = nomeCompleto.trim().toLowerCase().split(" ").filter(Boolean);

    if (nomes.length === 0) return "";

    if (nomes.length === 1) {
      return nomes[0];
    }

    return `${nomes[0]}.${nomes[nomes.length - 1]}`;
  }

  async function verificarLogin(login) {
    if (!login) return;

    setLoginLoading(true);

    try {
      const response = await api.get(`/usuarios/check-login/${login}`);

      setLoginExists(response.data.exists);
    } finally {
      setLoginLoading(false);
    }
  }

  async function handleNomeChange(event) {
    const nome = event.target.value.toUpperCase();

    const loginGerado = gerarLogin(nome);

    setForm((prev) => ({
      ...prev,
      nome,
      login: loginGerado,
    }));

    await verificarLogin(loginGerado);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (errors.length > 0) return;

    const payload = {
      nome: form.nome,
      login: form.login,
      email: form.email,
      senha: form.senha,
      status: form.status,
      loja_id: Number(form.loja_id),
      perfil_id: Number(form.perfil_id),
    };

    await api.post("/usuarios", payload);

    handleClear();
    await carregarDados();
  }

  return (
    <>
      <PageHeader
        title="Usuários"
        subtitle="Gerencie os usuários do sistema, seus acessos e permissões"
        breadcrumb={["Início", "Configurações", "Usuários"]}
        meta={
          <>
            <span>Loja ativa: </span>
            {user?.loja_nome ? (
              <strong>{user.loja_nome}</strong>
            ) : (
              <em>Nenhuma loja selecionada</em>
            )}
          </>
        }
      />

      <Card>
        <form onSubmit={handleSubmit}>
          <FormSection
            title="Cadastro de usuário"
            description="Preencha os dados e defina o acesso do usuário"
            icon={Fi.FiUserPlus}
            badge={errors.length > 0 ? "Pendente" : "Pronto"}
            badgeVariant={errors.length > 0 ? "warning" : "success"}
            errors={errors.length}
            collapsible
            defaultOpen
            loading={loading}
            tabs={[
              { label: "Dados", value: "dados" },
              { label: "Acesso", value: "acesso" },
            ]}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            stickyActions
            actions={
              <>
                <Button type="button" variant="secondary" onClick={handleClear}>
                  Limpar
                </Button>

                <Button type="submit" disabled={errors.length > 0}>
                  Salvar usuário
                </Button>
              </>
            }
          >
            {activeTab === "dados" && (
              <FormGrid columns={3}>
                <FormField>
                  <Input
                    name="nome"
                    label="Nome"
                    placeholder="Nome completo"
                    value={form.nome}
                    onChange={handleNomeChange}
                    style={{ textTransform: "uppercase" }}
                    $fullWidth
                  />
                </FormField>

                <FormField>
                  <Input
                    name="login"
                    label="Login"
                    value={form.login}
                    onChange={handleChange}
                    style={{ textTransform: "uppercase" }}
                    $fullWidth
                    $hasError={loginExists}
                    helperText={
                      loginLoading
                        ? "Verificando login..."
                        : loginExists
                          ? "Login já existe"
                          : "Login disponível"
                    }
                  />
                </FormField>

                <FormField>
                  <Input
                    name="email"
                    label="E-mail"
                    type="email"
                    placeholder="email@empresa.com"
                    value={form.email}
                    onChange={handleChange}
                    $fullWidth
                  />
                </FormField>

                <FormField>
                  <Input
                    name="senha"
                    label="Senha padrão"
                    type="password"
                    value={form.senha}
                    disabled
                    $fullWidth
                  />
                </FormField>

                <FormField>
                  <Input
                    name="status"
                    label="Status"
                    value={form.status}
                    disabled
                    $fullWidth
                  />
                </FormField>
              </FormGrid>
            )}

            {activeTab === "acesso" && (
              <FormGrid columns={2}>
                <FormField>
                  <Select
                    name="loja_id"
                    label="Loja"
                    value={form.loja_id}
                    onChange={handleChange}
                    $fullWidth
                  >
                    <option value="">Selecione uma loja</option>

                    {lojas.map((loja) => (
                      <option key={loja.id} value={loja.id}>
                        {loja.codigo_loja} - {loja.nome_fantasia}
                      </option>
                    ))}
                  </Select>
                </FormField>

                <FormField>
                  <Select
                    name="perfil_id"
                    label="Perfil"
                    value={form.perfil_id}
                    onChange={handleChange}
                    $fullWidth
                  >
                    <option value="">Selecione um perfil</option>

                    {perfis.map((perfil) => (
                      <option key={perfil.id} value={perfil.id}>
                        {perfil.nome} - Nível {perfil.nivel}
                      </option>
                    ))}
                  </Select>
                </FormField>
              </FormGrid>
            )}
          </FormSection>
        </form>
      </Card>

      <Card title="Lista de usuários" description="Usuários cadastrados">
        <TableWrap>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Login</th>
                <th>E-mail</th>
                <th>Loja</th>
                <th>Perfil</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {usuarios.map((usuario) => (
                <tr key={`${usuario.id}-${usuario.loja_id}`}>
                  <td>{usuario.nome}</td>
                  <td>{usuario.login}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.nome_fantasia}</td>
                  <td>{usuario.perfil}</td>
                  <td>
                    <StatusBadge $status={usuario.status}>
                      {usuario.status}
                    </StatusBadge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableWrap>
      </Card>
    </>
  );
}
