import { css } from '@kuma-ui/core'

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px;
  padding-top: 120px;
  gap: 120px;

  @media (max-width: t('breakpoints.lg')) {
    padding: 24px;
    gap: 64px;
    padding-top: 30px;
  }

  img {
    aspect-ratio: 4/3;
    height: auto;
    object-fit: cover;
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;
  }

  a {
    color: t('colors.neutral.500');
    text-decoration: none;
    outline: none;

    @media (max-width: t('breakpoints.lg')) {
      width: 100%;
    }
  }
`

export const album = css`
  display: flex;
  width: 80vw;
  max-width: 1200px;
  gap: 40px;

  &:hover {
    img {
      transform: scale(110%);
    }
  }

  @media (max-width: t('breakpoints.lg')) {
    gap: 8px;
    flex-direction: column-reverse;
    width: 100%;
  }
`

export const imageWrapper = css`
  display: flex;
  border-radius: t('radii.sm');
  aspect-ratio: 16/9;
  overflow: hidden;
  max-width: 650px;
  flex: 4;

  @media (max-width: t('breakpoints.lg')) {
    max-width: unset;
  }
`

export const title = css`
  font-size: min(70px, 4vw);
  line-height: 120%;
  text-transform: uppercase;
  flex: 3;

  @media (max-width: t('breakpoints.lg')) {
    font-size: min(t('fontSizes.xxxl'), 6vw);
  }
`
