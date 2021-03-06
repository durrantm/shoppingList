import React from 'react';
import styled from 'styled-components';
import withDataFetching from '../withDataFetching';
import SubHeader from '../components/Header/SubHeader';
import ListItem from '../components/ListItem/ListItem';

const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const List = ({ data, loading, error, lists, match, history }) => {
  const items = data && data.filter(item => item.listId === parseInt(match.params.id))
  const list = lists && lists.find(list => list.id === parseInt(match.params.id));
  return (
    <>
      {history && list &&
        <SubHeader goBack={() => history.goBack()} title={list.title} openForm={() => history.push(`${match.url}/new`)} />
      }
      <ListItemWrapper>
        {items && items.map(item =>
          <ListItem key={item.id} data={item} />
        )}
      </ListItemWrapper>
    </>
  )
}

export default withDataFetching({
  dataSource: 'https://my-json-server.typicode.com/durrantm/shoppingList/items',
})(List);