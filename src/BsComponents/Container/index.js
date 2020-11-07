import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Container = ({
  children,
  className,
  hasRow = true,
  showRowOnly = false,
}) => {
  if (showRowOnly) {
    return <div className="row">{children}</div>;
  }
  return (
    <div className={cx('container', className)}>
      {hasRow ? <div className="row">{children}</div> : children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hasRow: PropTypes.bool,
  showRowOnly: PropTypes.bool,
};

export default Container;
