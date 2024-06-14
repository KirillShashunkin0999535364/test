'use client';


import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import {useTranslate} from "../../../locales";
import AccountGeneral from '../account-general';


export default function AccountView() {
  const settings = useSettingsContext();
  const { t } = useTranslate();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Account"
        links={[
          { name: t('shop'), href: '/shop' },
          { name: t('user'), href: paths.home.user.profile },
          { name: t('account') },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />
      <AccountGeneral />
    </Container>
  );
}
