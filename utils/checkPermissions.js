import { UnAuthenticatedError } from "../errors/index.js"

const chekPermissions = (requestUser, resourceUserId) => {
    if (requestUser.userId === resourceUserId.toString()) return;
    throw new UnAuthenticatedError('Not authorized to access this route');
}

export default chekPermissions