import { css } from '@kuma-ui/core'

export const container = css`
  height: calc(100vh - t('sizes.header'));
  width: 100%;
  max-width: 100%;
  padding: 40px 64px;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
  padding-top: 0;
  gap: 80px;

  a {
    display: contents;
  }

  @media (max-width: t('breakpoints.lg')) {
    gap: 0;
    flex-direction: column;
    padding: 24px;
    padding-top: 0;
    height: calc(100vh - t('sizes.headerMobile'));
  }
`

export const slide = css`
  --slide-timing-function: ease-in-out;
  --slide-base-animation: 5s var(--slide-timing-function) forwards;
  --slide-translate: translateX(60px);
  --background-position-start: 40%;
  --background-position-end: 60%;

  @keyframes slides {
    0% {
      transform: var(--slide-translate);
      opacity: 0;
    }
    40%,
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes thumbnail {
    0% {
      background-position: var(--background-position-start);
    }
    100% {
      background-position: var(--background-position-end);
    }
  }

  height: 100%;
  width: 100%;
  gap: 8px;
  overflow: hidden;
  flex: 4;
  border-radius: t('radii.md');
  animation: slides var(--slide-base-animation);

  @media (max-width: t('breakpoints.lg')) {
    --slide-translate: translateX(20px);
    animation: slides var(--slide-base-animation);
  }

  div {
    width: 100%;
    height: 100%;
    user-select: none;
    background-size: cover;
    background-color: t('colors.neutral.200');
    animation: thumbnail var(--slide-base-animation);

    &:only-child {
    }

    @media (max-width: t('breakpoints.lg')) {
      min-width: unset;
    }
  }
`

export const singleSlide = css`
  min-width: 408px;
  border-radius: t('radii.md');

  @media (max-width: t('breakpoints.lg')) {
  }
`

export const dualSlide = css`
  --background-position-start: 45%;
  --background-position-end: 55%;

  &:first-child:not(:only-child) {
    border-radius: t('radii.md') 0 0 t('radii.md');
  }
  &:last-child:not(:only-child) {
    border-radius: 0 t('radii.md') t('radii.md') 0;
  }
`

export const textWrapper = css`
  height: -webkit-fill-available;
  width: 100%;
  padding-bottom: 40px;
  padding-top: 80px;
  justify-content: space-between;
  flex: unset;
  flex: 1;

  @media (max-width: t('breakpoints.lg')) {
    padding-bottom: 0;
    padding-top: 20px;
    justify-content: unset;
  }
`

export const name = css`
  min-width: 35vw;
  width: 35vw;
  line-height: 110%;
  font-size: min(9.5vw, t('fontSizes.heroLg'));
  font-weight: 900px;

  @media (max-width: t('breakpoints.lg')) {
    min-width: 100%;
    width: 100%;
    font-size: min(16vw, t('fontSizes.xxxl'));
    margin-bottom: 24px;
  }
`

export const meta = css`
  @keyframes metaSlide {
    0% {
      transform: translateY(8px);
      opacity: 0;
    }
    20% {
      transform: translateY(0px);
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }

  line-height: 130%;
  font-size: t('fontSizes.md');
  animation: metaSlide 7s ease forwards;

  @media (max-width: t('breakpoints.lg')) {
    font-size: max(2vw, t('fontSizes.rg'));
  }
`
