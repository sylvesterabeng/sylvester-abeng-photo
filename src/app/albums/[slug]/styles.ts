import { css } from '@kuma-ui/core'

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px;
  padding-top: 20vh;
  gap: 64px;

  transform: translateY(0px);
  transition:
    opacity 1.5s ease,
    transform 1.5s ease;

  @starting-style {
    opacity: 0;
    transform: translateY(50px);
  }

  @media (max-width: t('breakpoints.lg')) {
    padding: 24px;
    padding-top: 5vh;
    gap: 24px;
  }
`

export const title = css`
  width: 80vw;
  line-height: 120%;
  text-align: center;
  text-transform: uppercase;
  font-size: 6vw;

  @keyframes text-scroll {
    from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(-80px);
    }
  }

  animation: text-scroll auto ease forwards;
  animation-timeline: scroll();
  animation-range: 0 50vh;
`

export const photos = css`
  --photo-gap: 24px;

  user-select: none;
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--photo-gap);

  img {
    border-radius: t('radii.sm');
    height: auto;
    object-fit: contain;
  }
`

export const verticalPhoto = css`
  width: calc(50% - var(--photo-gap) / 2);
`

export const horizontalPhoto = css`
  width: 100%;
`
