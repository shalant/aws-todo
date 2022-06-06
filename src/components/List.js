import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listTodos } from '../graphql/queries';

export interface GraphQLResult {
    data?: Record<string>
}