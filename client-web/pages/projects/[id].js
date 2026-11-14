import React from 'react';
import ExpeditionPage from '../../components/Expedition/ExpeditionPage';

const ProjectPage = ({ id }) => <ExpeditionPage id={id} />;

export async function getStaticPaths() {
  const { expeditionIds } = await import(
    '../../utils/constants/expedition-data'
  );
  return {
    paths: expeditionIds.map(id => ({ params: { id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return { props: { id: params.id } };
}

export default ProjectPage;
