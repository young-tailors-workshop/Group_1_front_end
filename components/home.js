import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Card
} from 'semantic-ui-react'

const items = [
  {
    id: '1',
    header: 'Title OKR',
    description: 'Cong hoa xa hoi chu nghia viet nam doc lap tu do hanh phuc....',
    meta: 'Thaycacac: 30%',
  },
  {
    id: '2',
    header: 'Title OKR',
    description: 'Cong hoa xa hoi chu nghia viet nam doc lap tu do hanh phuc....',
    meta: 'Thaycacac: 30%',
  },
  {
    id: '3',
    header: 'Title OKR',
    description: 'Cong hoa xa hoi chu nghia viet nam doc lap tu do hanh phuc....',
    meta: 'Thaycacac: 30%',
  },
  {
    id: '4',
    header: 'Title OKR',
    description: 'Cong hoa xa hoi chu nghia viet nam doc lap tu do hanh phuc....',
    meta: 'Thaycacac: 30%',
  },
  {
    id: '5',
    header: 'Title OKR',
    description: 'Cong hoa xa hoi chu nghia viet nam doc lap tu do hanh phuc....',
    meta: 'Thaycacac: 30%',
  },
]

const FixedMenuLayout = () => (
  <div>
    <Head>
      <title>Young Tailor</title>
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
      />
    </Head>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='https://avatars0.githubusercontent.com/u/49083246?s=200&v=4' style={{ marginRight: '1.5em' }} />
          Young Tailor
        </Menu.Item>
        <Menu.Item as='a'>This Week</Menu.Item>
        <Menu.Item as='a'>This Month</Menu.Item>
        <Menu.Item as='a'>This Semester</Menu.Item>
      </Container>
    </Menu>

    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Share your OKR</Header>
      <p>True success is all about working towards meaningful goals and dreams.</p>
      {
        items.map(item => (
          <Link
            href={"/articel/" + item.id}
            key={item.id} >
            <Card
              fluid
              header={item.header}
              meta={item.meta}
              description={item.description}
            />
          </Link>
        ))
      }
    </Container>

    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
            <Header inverted as='h4' content='SYOKR' />
            <p>
              Young Tailors Workshop | Group 1 | 2019
            </p>
      </Container>
    </Segment>
  </div>
)

export default FixedMenuLayout