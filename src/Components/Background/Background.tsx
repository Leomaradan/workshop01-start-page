import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import styles from './Background.module.scss';
import { State } from '../../Models/State';
import Credit from './Credit';

export interface BackgroundProps {
  children?: ReactNode;
  className?: string;
}

const Background: React.FC<BackgroundProps> = (props: BackgroundProps) => {

  const { children, className } = props;

  const backgroundImage = useSelector((state: State) => state.background.image);

  if (!backgroundImage) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  const {
    authorName,
    authorUrl,
    imageUrl,
    additionnalInfo,
    imageName,
    imagePageUrl, sourceName,
    sourceUrl
  } = backgroundImage;

  const creditsGroups: Array<{ key: string; text: string; url: string }> = [];

  creditsGroups.push({
    key: 'photo',
    text: imageName ?? 'Photo',
    url: imagePageUrl ?? imageUrl
  });

  creditsGroups.push({
    key: 'author',
    text: authorName,
    url: authorUrl
  });

  if (sourceUrl) {
    creditsGroups.push({
      key: 'source',
      text: sourceName ?? 'Source',
      url: sourceUrl
    });
  }

  return (
    <div className={styles.Background}>
      <div className={styles.Image}>
        <div style={{ backgroundImage: `url("${imageUrl}")` }} />
      </div>
      <div className={styles.Credit}>
        {creditsGroups
          // eslint-disable-next-line react/jsx-props-no-spreading
          .map(credit => <Credit {...credit} />)
          .reduce((acc: JSX.Element | null, c: JSX.Element) => acc === null ? c : (
            // eslint-disable-next-line react/jsx-one-expression-per-line
            <>{acc} | {c}</>
          ), null)}
        {additionnalInfo && <span className={styles.Info}>{additionnalInfo}</span>}
      </div>
      <div className={className}>
        {children}
      </div>
    </div>
  );
};

export default Background;