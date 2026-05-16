import { TabsContainer, TabsList, TabButton, TabsContent } from "./styles";

export function FormTabs({ tabs = [], activeTab, onChange, children }) {
  return (
    <TabsContainer>
      <TabsList>
        {tabs.map((tab) => (
          <TabButton
            key={tab.value}
            type="button"
            $active={activeTab === tab.value}
            onClick={() => onChange(tab.value)}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabsList>

      <TabsContent>{children}</TabsContent>
    </TabsContainer>
  );
}
