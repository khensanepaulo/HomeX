import React from 'react';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import { useText } from '~/theme/common';
import Title from '../Title';
import useStyles from './about-style';

function About() {
  const classes = useStyles();
  const text = useText();
  const { t } = useTranslation('common');
  return (
    <div className={classes.root}>
      <div className={classes.bgDeco}>
        <img src={imgAPI.architect[8]} alt="3d home model" />
      </div>
      <Container fixed>
        <Grid container justifyContent="center" spacing={6}>
          <Grid item md={7} xs={12}>
            <Title
              head={t('architect-landing.about_title')}
              dark
            />
            <Typography className={text.paragraph}>
              {t('architect-landing.about_desc')}
            </Typography>
          </Grid>
          <Grid item md={5} xs={12} className={classes.illusWrap}>
            <Hidden smDown>
              <div>
                <img src={imgAPI.architect[8]} alt="3d home model" className={classes.illustration} />
              </div>
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default About;
