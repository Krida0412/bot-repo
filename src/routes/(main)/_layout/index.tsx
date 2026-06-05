'use client';

import { HotkeyScopeEnum } from '@lobechat/const/hotkeys';
import { Flexbox } from '@lobehub/ui';
import { cx } from 'antd-style';
import { type FC } from 'react';
import { Suspense } from 'react';
import { HotkeysProvider } from 'react-hotkeys-hook';
import { Outlet } from 'react-router-dom';

import Loading from '@/components/Loading/BrandTextLoading';
import { BANNER_HEIGHT } from '@/features/AlertBanner/CloudBanner';
import HotkeyHelperPanel from '@/features/HotkeyHelperPanel';
import NavPanel from '@/features/NavPanel';
import { RouteMetaBridge } from '@/features/RouteMeta';
import { usePlatform } from '@/hooks/usePlatform';
import { MarketAuthProvider } from '@/layout/AuthProvider/MarketAuth';
import CmdkLazy from '@/layout/GlobalProvider/CmdkLazy';
import dynamic from '@/libs/next/dynamic';
import { DndContextWrapper } from '@/routes/(main)/resource/features/DndContextWrapper';
import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';

import DesktopHome from '../home';
import DesktopHomeLayout from '../home/_layout';
import DesktopLayoutContainer from './DesktopLayoutContainer';
import RegisterHotkeys from './RegisterHotkeys';
import { styles } from './style';

const CloudBanner = dynamic(() => import('@/features/AlertBanner/CloudBanner'));

const Layout: FC = () => {
  const { isPWA } = usePlatform();
  const { showCloudPromotion } = useServerConfigStore(featureFlagsSelectors);

  return (
    <HotkeysProvider initiallyActiveScopes={[HotkeyScopeEnum.Global]}>
      <RouteMetaBridge />
      <Suspense fallback={null}>
        {showCloudPromotion && <CloudBanner />}
      </Suspense>
      <DndContextWrapper>
        <Flexbox
          horizontal
          className={cx(isPWA ? styles.mainContainerPWA : styles.mainContainer)}
          width={'100%'}
          height={
            showCloudPromotion
              ? `calc(100% - ${BANNER_HEIGHT}px)`
              : '100%'
          }
        >
          <NavPanel />
          <DesktopLayoutContainer>
            <MarketAuthProvider isDesktop={false}>
              <DesktopHomeLayout>
                <DesktopHome />
              </DesktopHomeLayout>
              <Suspense fallback={<Loading debugId="DesktopMainLayout > Outlet" />}>
                <Outlet />
              </Suspense>
            </MarketAuthProvider>
          </DesktopLayoutContainer>
        </Flexbox>
      </DndContextWrapper>
      <Suspense fallback={null}>
        <HotkeyHelperPanel />
        <RegisterHotkeys />
        <CmdkLazy />
      </Suspense>
    </HotkeysProvider>
  );
};

export default Layout;
