const { clsx } = require("clsx");
const { twMerge } = require("tailwind-merge");

function util(...inputs) {
    return twMerge(clsx(inputs));
}

module.exports = { util };
