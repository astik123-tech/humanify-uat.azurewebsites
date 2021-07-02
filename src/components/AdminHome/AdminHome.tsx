import React from "react";

import {
  Container,
  List,
  Item,
  Content,CustomDiv,CustomLink
} from "../../styledComponents/AdmineHome";
const AdminHome = () => {
  return (
    <Container>
      <List>
        <CustomDiv fontSize="18px" fontWeight="600" height="50px" marginT="10px">
          <Content>Tenants</Content>
          <CustomLink
              to="/tenants"
          >
            View All
          </CustomLink>
        </CustomDiv>
        <Item>
          <Content>
            <CustomDiv fontSize="16px" fontWeight="400">Group 1</CustomDiv>
            <CustomDiv fontSize="14px" color="#9EA0A5">This is the descriptions over here</CustomDiv>
          </Content>
        </Item>
        <Item>
          <Content>
            <CustomDiv fontSize="16px" fontWeight="400">Group 1</CustomDiv>
            <CustomDiv fontSize="14px" color="#9EA0A5">This is the descriptions over here</CustomDiv>
          </Content>
        </Item>
        <Item>
          <Content>
            <CustomDiv fontSize="16px" fontWeight="400">Group 1</CustomDiv>
            <CustomDiv fontSize="14px" color="#9EA0A5">This is the descriptions over here</CustomDiv>
          </Content>
        </Item>
        <Item>
          <Content>
            <CustomDiv fontSize="16px" fontWeight="400">Group 1</CustomDiv>
            <CustomDiv fontSize="14px" color="#9EA0A5">This is the descriptions over here</CustomDiv>
          </Content>
        </Item>
        <Item>
          <Content>
            <CustomDiv fontSize="16px" fontWeight="400">Group 1</CustomDiv>
            <CustomDiv fontSize="14px" color="#9EA0A5">This is the descriptions over here</CustomDiv>
          </Content>
        </Item>
        <Item>
          <Content>
            <CustomDiv fontSize="16px" fontWeight="400">Group 1</CustomDiv>
            <CustomDiv fontSize="14px" color="#9EA0A5">This is the descriptions over here</CustomDiv>
          </Content>
        </Item>
      </List>
      <List>
        <CustomDiv fontSize="18px" fontWeight="600" height="50px" marginT="10px">
          <Content>Groups</Content>
          <CustomLink
              to="/groups"
          >
            View All
          </CustomLink>
        </CustomDiv>
        <Item>
          <Content>
            <CustomDiv fontSize="16px" fontWeight="400">Group 1</CustomDiv>
            <CustomDiv fontSize="14px" color="#9EA0A5">This is the descriptions over here</CustomDiv>
          </Content>
        </Item>
        <Item>
          <Content>
            <CustomDiv fontSize="16px" fontWeight="400">Group 1</CustomDiv>
            <CustomDiv fontSize="14px" color="#9EA0A5">This is the descriptions over here</CustomDiv>
          </Content>
        </Item>
        <Item>
          <Content>
            <CustomDiv fontSize="16px" fontWeight="400">Group 1</CustomDiv>
            <CustomDiv fontSize="14px" color="#9EA0A5">This is the descriptions over here</CustomDiv>
          </Content>
        </Item>
        <Item>
          <Content>
            <CustomDiv fontSize="16px" fontWeight="400">Group 1</CustomDiv>
            <CustomDiv fontSize="14px" color="#9EA0A5">This is the descriptions over here</CustomDiv>
          </Content>
        </Item>
        <Item>
          <Content>
            <CustomDiv fontSize="16px" fontWeight="400">Group 1</CustomDiv>
            <CustomDiv fontSize="14px" color="#9EA0A5">This is the descriptions over here</CustomDiv>
          </Content>
        </Item>
        <Item>
          <Content>
            <CustomDiv fontSize="16px" fontWeight="400">Group 1</CustomDiv>
            <CustomDiv fontSize="14px" color="#9EA0A5">This is the descriptions over here</CustomDiv>
          </Content>
        </Item>
      </List>
      <List>
        <CustomDiv fontSize="18px" fontWeight="600" height="50px" marginT="10px">
          <Content>Users</Content>
          <CustomLink
              to="/users"
          >
            View All
          </CustomLink>
        </CustomDiv>
        <Item>
          <Content>
            <CustomDiv fontSize="16px" fontWeight="400">Group 1</CustomDiv>
            <CustomDiv fontSize="14px" color="#9EA0A5">This is the descriptions over here</CustomDiv>
          </Content>
        </Item>
        <Item>
          <Content>
            <CustomDiv fontSize="16px" fontWeight="400">Group 1</CustomDiv>
            <CustomDiv fontSize="14px" color="#9EA0A5">This is the descriptions over here</CustomDiv>
          </Content>
        </Item>
        <Item>
          <Content>
            <CustomDiv fontSize="16px" fontWeight="400">Group 1</CustomDiv>
            <CustomDiv fontSize="14px" color="#9EA0A5">This is the descriptions over here</CustomDiv>
          </Content>
        </Item>
        <Item>
          <Content>
            <CustomDiv fontSize="16px" fontWeight="400">Group 1</CustomDiv>
            <CustomDiv fontSize="14px" color="#9EA0A5">This is the descriptions over here</CustomDiv>
          </Content>
        </Item>
        <Item>
          <Content>
            <CustomDiv fontSize="16px" fontWeight="400">Group 1</CustomDiv>
            <CustomDiv fontSize="14px" color="#9EA0A5">This is the descriptions over here</CustomDiv>
          </Content>
        </Item>
        <Item>
          <Content>
            <CustomDiv fontSize="16px" fontWeight="400">Group 1</CustomDiv>
            <CustomDiv fontSize="14px" color="#9EA0A5">This is the descriptions over here</CustomDiv>
          </Content>
        </Item>
      </List>
    </Container>
  );
};

export default AdminHome;
