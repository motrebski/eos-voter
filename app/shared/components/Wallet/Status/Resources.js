// @flow
import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Grid, Header, Segment } from 'semantic-ui-react';

import ResourcePercentage from '../../Global/Data/Resource/Percentage';

class WalletStatusResources extends Component<Props> {
  render() {
    const {
      displayResourcesUsedSetting,
      statsFetcher,
      t
    } = this.props;

    const {
      cpuUsage,
      netUsage,
      ramUsage
    } = statsFetcher.resourceUsage();

    return (
      <Segment stacked>
        <Header dividing size="small">
          {t('wallet_status_resources_title')}
        </Header>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <Header
                content={t('wallet_status_resources_ram_available_title')}
                icon="database"
                size="small"
                subheader={t('wallet_status_resources_ram_available_desc')}
              />

              <ResourcePercentage
                color="teal"
                percentageUsed={ramUsage}
                displayResourcesUsedSetting={displayResourcesUsedSetting}
                size="tiny"
                style={{ minWidth: 0 }}
              />

            </Grid.Column>
            <Grid.Column>
              <Header
                content={t('wallet_status_resources_cpu_available_title')}
                icon="microchip"
                size="small"
                subheader={t('wallet_status_resources_cpu_available_desc')}
              />
              <ResourcePercentage
                color="teal"
                percentageUsed={cpuUsage}
                displayResourcesUsedSetting={displayResourcesUsedSetting}
                size="tiny"
                style={{ minWidth: 0 }}
              />
            </Grid.Column>
            <Grid.Column>
              <Header
                content={t('wallet_status_resources_net_available_title')}
                icon="cloud upload"
                size="small"
                subheader={t('wallet_status_resources_net_available_desc')}
              />
              <ResourcePercentage
                color="teal"
                percentageUsed={netUsage}
                displayResourcesUsedSetting={displayResourcesUsedSetting}
                size="tiny"
                style={{ minWidth: 0 }}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default translate('wallet')(WalletStatusResources);
