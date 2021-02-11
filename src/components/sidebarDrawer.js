import sidebarDrawerStyles from '../styles/components/sidebarDrawer.module.scss';

import React from 'react';

import { useLocation } from '@reach/router';

import AniLink from 'gatsby-plugin-transition-link/AniLink';

import AnimationSlideUp from '../components/animationSlideUp';
import Underline from '../components/underline';

const SidebarDrawer = ({ isSidebarOpen, sidebarHandler }) => {
  const location = useLocation();
  const { pathname } = location;

  const sidebarOpen = isSidebarOpen
    ? sidebarDrawerStyles.open
    : sidebarDrawerStyles.close;
  return (
    <nav className={`${sidebarDrawerStyles.sidebarDrawer} ${sidebarOpen}`}>
      <AnimationSlideUp shouldAnimate={isSidebarOpen}>
        <Underline>
          <AniLink
            to='/'
            onClick={pathname === '/' ? () => sidebarHandler() : null}
            activeClassName={sidebarDrawerStyles.active}
            cover
            direction='up'
            bg='#BBBBBB'
          >
            <h1 className={`${sidebarDrawerStyles.headline}`}>Home</h1>
            <div className={`${sidebarDrawerStyles.description}`}>
              <p>{pathname === '/' ? 'You are here' : 'Back to basics'}</p>
            </div>
          </AniLink>
        </Underline>
      </AnimationSlideUp>

      <AnimationSlideUp shouldAnimate={isSidebarOpen} delay={50}>
        <Underline>
          <AniLink
            to='/work'
            onClick={pathname === '/work' ? () => sidebarHandler() : null}
            activeClassName={sidebarDrawerStyles.active}
            cover
            direction='up'
            bg='#BBBBBB'
          >
            <h1 className={`${sidebarDrawerStyles.headline}`}>Work</h1>
            <div className={`${sidebarDrawerStyles.description}`}>
              <p>{pathname === '/work' ? 'You are here' : 'My portfolio'}</p>
            </div>
          </AniLink>
        </Underline>
      </AnimationSlideUp>

      <AnimationSlideUp shouldAnimate={isSidebarOpen} delay={100}>
        <Underline>
          <AniLink
            to='/about'
            onClick={pathname === '/about' ? () => sidebarHandler() : null}
            activeClassName={sidebarDrawerStyles.active}
            cover
            direction='up'
            bg='#BBBBBB'
          >
            <h1 className={`${sidebarDrawerStyles.headline}`}>About</h1>
            <div className={`${sidebarDrawerStyles.description}`}>
              <p>{pathname === '/about' ? 'You are here' : 'Know me better'}</p>
            </div>
          </AniLink>
        </Underline>
      </AnimationSlideUp>

      <AnimationSlideUp shouldAnimate={isSidebarOpen} delay={150}>
        <Underline>
          <AniLink
            to='/blog'
            onClick={pathname === '/blog' ? () => sidebarHandler() : null}
            activeClassName={sidebarDrawerStyles.active}
            cover
            direction='up'
            bg='#BBBBBB'
          >
            <h1 className={`${sidebarDrawerStyles.headline}`}>Blog</h1>
            <div className={`${sidebarDrawerStyles.description}`}>
              <p>{pathname === '/blog' ? 'You are here' : 'My writing'}</p>
            </div>
          </AniLink>
        </Underline>
      </AnimationSlideUp>

      <AnimationSlideUp shouldAnimate={isSidebarOpen} delay={200}>
        <Underline>
          <AniLink
            to='/contact'
            onClick={pathname === '/contact' ? () => sidebarHandler() : null}
            activeClassName={sidebarDrawerStyles.active}
            cover
            direction='up'
            bg='#BBBBBB'
          >
            <h1 className={`${sidebarDrawerStyles.headline}`}>Contact</h1>
            <div className={`${sidebarDrawerStyles.description}`}>
              <p>
                {pathname === '/contact' ? 'You are here' : "Let's connect"}
              </p>
            </div>
          </AniLink>
        </Underline>
      </AnimationSlideUp>
    </nav>
  );
};

export default SidebarDrawer;
