import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {FeedRow, Tab, RewardedRow} from '../../components';
import AssetConst from '../../assets';
import {DataContext} from '../../context/DataContext';

const ListView = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const {reward} = useContext(DataContext);
  const EmptyComponent = () => {
    return (
      <View style={styles.nodata}>
        <Text>No data found.</Text>
      </View>
    );
  };
  const RenderItems = ({item, index}) => {
    return (
      <FeedRow
        image={AssetConst.PROFILE_PIC}
        key={index}
        title={item.message}
        subTitle={item.name + ' rewarded by ' + item.by + '.'}
      />
    );
  };
  const RenderItems1 = ({item, index}) => {
    return <RewardedRow />;
  };

  return (
    <View style={{}}>
      <View
        style={{
          flexDirection: 'row',
          height: 40,
        }}>
        <Tab
          title={'Feed'}
          left={true}
          isActive={activeTab === 'feed'}
          onPresss={() => setActiveTab('feed')}
        />
        <Tab
          title={'My Rewards'}
          right={true}
          isActive={activeTab === 'reward'}
          onPresss={() => setActiveTab('reward')}
        />
      </View>
      {activeTab === 'feed' ? (
        <FlatList
          contentContainerStyle={{
            paddingBottom: 80,
          }}
          data={reward}
          ListEmptyComponent={EmptyComponent}
          renderItem={RenderItems}
        />
      ) : (
        <FlatList
          contentContainerStyle={{
            paddingBottom: 80,
          }}
          data={[1, 2]}
          ListEmptyComponent={EmptyComponent}
          renderItem={RenderItems1}
        />
      )}
    </View>
  );
};

export default ListView;

const styles = StyleSheet.create({
  nodata: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
});
