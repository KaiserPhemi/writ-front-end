// third-party libraries
import toastr from 'toastr';

/**
 * 
 * @param {string} error 
 */
const errorMessage = (error) => {
  toastr.error(error);
};

export default errorMessage;
