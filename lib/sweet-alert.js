import Swal from 'sweetalert2';
import { mantineBlue } from '../lib/colors';

export default function fire(opts) { return Swal.fire({ confirmButtonColor: mantineBlue, ...opts }); }

export const error = (title, error) => fire({
    title,
    text: error,
    confirmButtonText: 'OK',
    icon: 'error',
});