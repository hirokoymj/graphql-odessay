import React from 'react';
import { Layout, QueryResult } from '../components';
import { gql } from '../__generated__/';
import { useQuery } from '@apollo/client';
import TrackCard from '../containers/track-card';

/** GET_TRACKS query to retrieve all tracks */
const GET_TRACKS = gql(`
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`);

const Track = () => {
  const { loading, error, data } = useQuery(GET_TRACKS);

  //   if (loading) return 'Loading...';
  //   if (error) return `Error! ${error.message}`;
  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Track;
