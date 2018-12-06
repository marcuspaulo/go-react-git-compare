import React from 'react';
import PropTypes from 'prop-types';

import { Container, Repository } from './styles';

const CompareList = ({ repositories }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
        </header>

        <ul>
          <li>
            {repository.stargazers_count}
            <small> starts</small>
          </li>
          <li>
            {repository.forks_count}
            <small> forks</small>
          </li>
          <li>
            {repository.open_issues_count}
            <small> issues</small>
          </li>
          <li>
            {repository.lastCommit}
            <small> last commits</small>
          </li>
        </ul>
      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      owner: PropTypes.shape({
        login: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
      }).isRequired,
      forks: PropTypes.number.isRequired,
      open_issues: PropTypes.number.isRequired,
      watchers: PropTypes.number.isRequired,
      lastCommit: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  // onRefresh: PropTypes.func.isRequired,
  // onRemove: PropTypes.func.isRequired,
};

export default CompareList;
