import { useState } from "react";
import * as Fi from "react-icons/fi";

import {
  Section,
  Header,
  HeaderMain,
  IconBox,
  TitleArea,
  TitleRow,
  Title,
  Description,
  Badge,
  ErrorCounter,
  CollapseButton,
  Content,
  StickyActions,
  Tabs,
  TabButton,
  SkeletonBox,
} from "./styles";

export function FormSection({
  title,
  description,
  icon,
  badge,
  badgeVariant = "default",
  errors = 0,
  collapsible = false,
  defaultOpen = true,
  loading = false,
  tabs = [],
  activeTab,
  onTabChange,
  actions,
  stickyActions,
  children,
}) {
  const [open, setOpen] = useState(defaultOpen);

  const Icon = icon;

  return (
    <Section $hasError={errors > 0}>
      <Header>
        <HeaderMain>
          {Icon && (
            <IconBox $hasError={errors > 0}>
              <Icon />
            </IconBox>
          )}

          <TitleArea>
            <TitleRow>
              {title && <Title>{title}</Title>}

              {badge && <Badge $variant={badgeVariant}>{badge}</Badge>}

              {errors > 0 && (
                <ErrorCounter>
                  {errors} erro{errors > 1 ? "s" : ""}
                </ErrorCounter>
              )}
            </TitleRow>

            {description && <Description>{description}</Description>}
          </TitleArea>
        </HeaderMain>

        {collapsible && (
          <CollapseButton type="button" onClick={() => setOpen(!open)}>
            {open ? <Fi.FiChevronUp /> : <Fi.FiChevronDown />}
          </CollapseButton>
        )}
      </Header>

      {tabs.length > 0 && open && (
        <Tabs>
          {tabs.map((tab) => (
            <TabButton
              key={tab.value}
              type="button"
              $active={activeTab === tab.value}
              onClick={() => onTabChange?.(tab.value)}
            >
              {tab.label}
            </TabButton>
          ))}
        </Tabs>
      )}

      {open && (
        <Content>
          {loading ? (
            <>
              <SkeletonBox />
              <SkeletonBox />
              <SkeletonBox $small />
            </>
          ) : (
            children
          )}
        </Content>
      )}

      {open && (actions || stickyActions) && (
        <StickyActions $sticky={stickyActions}>{actions}</StickyActions>
      )}
    </Section>
  );
}
