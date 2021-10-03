import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
// import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

const Footer = () => {
    return (
        <div className="footer">
        <div className="footer__left">
        <img className="footer__albumLogo"
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQUFBgVFBUYGBgaGBgbGBgYGBgYGxoYGBkZGhgYGBgbIC0kGx0pIBkZJjclKy4yNTQ0GyM5PzkyPi0yNDABCwsLEA8QHhISHTIpIykyMDUyMjIyMjIyMjI1MjIyMjIwMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAIHAQj/xABEEAACAQIEAwUEBwcCBAcBAAABAhEAAwQSITEFQVEGEyJhcTKBkaEHFEJSkrHBI2JygtHh8BWiU7LC8TNDc4OTs9Ik/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDBAAF/8QAKxEAAwEAAgIBAwIFBQAAAAAAAAECEQMhEjFBEyJRBGEUQnHB0TJSgZGh/9oADAMBAAIRAxEAPwB7r0CtQa2FYzQbitga1FbiuAbCthWgqQUxxutetWLXjmicVry0Mu2VJq9ibsCgl3GAMarDJUeYjCA8hVL/AE3Xarv1oGpbd0GqJk8LPC7WUUfsUIwriitk0llJLdamvAa8JqYxo9U7oq05qq5oDFrDW6volU8M1XlerT6JP2elK8ZQN6r43HpaQu5AA/z30utxq5cbw2nyff0f4qDKe+i6SDMNjIrLJJ6jXygfrNRNjACegPp+dDb2KOSbaZmHVgvpof0pG7SdosUgKtbVR1LJ7ogzSVeDzx6dAfi1mRNxIP76zpO4mo3xVtohwZjLEGZnWemm/pXF+C4d8begkompYhc8BQSDBn0E10XsdZtLbYHKXJ9m4XDkcjD76RyFd5ac5SGm8oRM+v8ADBJ90bVSw3ELd0HIwJG4kSPUcqDcX4zlDW2tMAQQNR6Sh9nQ+fKkq/jGtPnS8w1HjW4YZo0RylthPmZB2mlpfgMrR94svhNI1zg13EXGFm3nKwSAygiZj2iJ2O1EMB2t779lfAV9RnGik8geQJ6jQ+Wk3cdjrFuxZD2kvOl24wUuym2ZQqxVdSDHPpRgW5wF8K4dct5WdCoLMozQDmQgOpXcETzFPeBstOXKcw3EaiPKl21xoPYQuLb3Hu32YGc1vOVgqobw+Uz7NNi4y2LjsrZizLGX7gAMhtjLAfA0tyt1nS+jbKSCY0ESfXaqd3A3HMKs6A7gaHbc+VEnuqAwU6MQY/dIaQfSagxDr3qENCgL4tNIneedK5QybAN3hNwtkCS0TEroNpJmBVM8NvBymRswUsRp7I0LAzBGvKi+VXtsmZUbPmBY5QwiCpblrBrbC8RSwFXMGKW7oBGqlmZGVFYbiFOu2tLklZdfC0B2S2QuAcqkAnoWmPyNe/WKJ8Sa0LVy3aZSJtEaiWl7jtHXKGUe6gncmp2/F4a+KFa1obVrYCvVSpAlOYTUCtwK9C1kUQGCtxWoFbAUTiRa8uLW6LWzrTHAPHaA0tYnU0249RBpSxLAMaaRKKxJ61NaxBFD8RcHI1WW+Z3o7gM0dOG35o/h2pI4HeYmnTCUrrQ5hfU1hrFFeGgMaOap3DVt6p3q4Jcw50rXiPErdm3nuNA2A5seQUczQnGcYW0s6Trvyganzj3evKuXdqe1Fy80qG3KqSfCsjkAAA0bjXzim8/hewLj3t+gp2g7TX7zyivkXZEUk+sgGf7+dUMNxrGD2LbqP33Kj4tlA9xpNfEZTLEluvIe4RPxqXA2LuKcW0zNJ+0xahmdsfy+EOuJ7U3MhVruQxsjq5n+LOflSfj8bduE+NnH7wn50+cI+jdYBuNJO4AgU28N7BYW2QxUmORMj4UqtN9IZw0u2J/Y+2bGCu3GGjkKSBqE+16TPy8zR/gz2VANnEFoH/hu6jrpqGMe8elN+K4Tba2beUBSNhXHu1HBrmFclSQkmDuB6g8qZXjxieGrUNXGr63TD28jD2WzjIx5Q2gHoZPkJpbfFugKG2H3GVPDAO4ADMvuAj0oXg+KkDS46mNV0dGA8iwZT6MAOlWB2mDQpLsR9lozA6ew+fM3oSfQ7U1HTnorXLRU94jDLlOUXNZ8REbzIIIkCZXpTHwzFfWhlKqroNVbUZTsy7kg+/l1oGnEbdw+MMzKpgsqSw1JBge1qTMjWdKpJiXtXu9toG6sSWzSBmDDQrvpos6bkTSphpaNZwuR9tQeQKj5/wBBTFwxzpVfh9+3ftrcjKeakgkH4iiFlADptTUtWkl08CaPpUN816laXjUWURSuiqxSp7jVXZ6RmriN0tCpxbFVkvipfrIpTTjGVUqQJW6rW2Wr4eTpEVrWKlK1oRXDGoFSKK8ArcVxxshry6ayo7zaUQYBuK3ioMVzvifEmDnSnvi4JBpB4lhvEaaKS9i1LBV/i/UGo7PEwTzqrjbMGqllNaNYzl0dI7L3lY6Gn/Cmua9lEgiukYI6CoTXY7QRWtTXqmvDVBCN6Cccx62kEmCZjWNo58v+9G3rnXaq0+Lxgw9skQsOQNFQhWZiDoSSVUDqZOgNKykewS3e468yqxCKR3lz7KzqFQR4mP2V/mPKgHaa9bt5bNtRCFp2Y5tR7XOBz6k+VP3F3t4Gwtq2AGhsokmJEM5J1YnXU768prk+Pvl2J5Tp510rse31pTZddf8APL5iuu/R1wMW7YuOPEw08q5Xw6ybt+3bXd3Cj4j+lfRPC8H3aKo2UAUOVvpHcSS2ghZirCtUIArwGll4M1pK9ylvtHg1u22BE9PWmE1SxdqRQ5NaDx4mfPXGOHd278t9NiKEJiOp9Ca6d274UcrXAuog6eW/yrlDiDVuGvKeyPNPjXQwYHibEqjwwJ5ltOkGf60bxXCpQXMqCAD3ea5mJnSJyoRpPLekvD3CP8/Kn7gHEkuW8lzK40BVwXn1O4PKY9+tG149oPHXl0yTspee2+Vgq7QPAMwmBKKYJn8+dOmHxKkCJ9/Pz+XypRbh6M37IIgGzJbtuQAdgFUBT+8xMabb014PCsy953cTr+0dpJ5wQwEe4+tIqGuApbuVrdeosOKtPa0pfYvoF4l6HXr0UVv2KGYnDmgkPN4UWxJmtheNbJhSTV+3gDFHxRT+IY9g1srVSfEV6mIpvJGXxLhFakV4jzW9McaRXtemvKATKivVNUN6gcBeIjQ0mcQt6mm/irwDSbjbniNL8h1YL2PtVRw9nxUYxSTXmEwutNuIX5GXs1ainvCDQUpcDtxTfhqnPsei8tYxrxagxOJS2M1xwqjrz6wOZqwhuh1KnQ/p1pXwdtLNzE3XJV7jzLI2iIIQDw7SWMnrVi/jbt91CIEQ6pnkOUEjOw+wDyBknoNTSlxnAtdF03GZ8mdgrMcoRCwViPsqQp11JghZgwulJkX+1PGLL3GysXJOpU6Hoo3+I6mlTFK0iQFP3RPh8iT9qiGIxdu2c1tFLnZm1CxzRZ+ZoO91jLMZPU9TVInF0LyVow/R+hbGqyqGZFdkU6As0IsnoM5b+Wuk8WvcQta/XbInZGREHoJmRp60ofRZgnK4m6kBoVUJ+8Mxb81qPE4HEM7u73FxIurEZlV7YGozgjKQQOY0Gmu8re01pXjWSnmjfwjj+NzqLyo6EgZ7ZGk+Q3FO95yqF/KaReC8EuhEJZnd83eHTKCSSsEnM0DKJMnzjSnXj1pvq+RPbIAHrtNTx9sdtdJCLxDtRj837NLSL1cyffqKm4VxPiV3X6xhj+6AG+Q2+NQ4zs7cbIrSqZWZ7uhAbXKoGpmRqxEAHTyS0wt9STdui0yISCzAl7mdiuQDWMrR4dNJ5xRlU12w05T6R0LH4t7gNrEW1VyDlZDKXNNQPut5GuO9o+Gmzc09lpI/UV0TgvGLmLti3ctnMADmjSRsw6UM7XcJbuix9pCWB8ulJx25vsblhVHRzywDM0f4beuW7guWTDjdd9P4ea+lCRLwQADEGNAT/Wr6oxglSHUwRsZGxFbmYJ6Oq8M4+lxQ161aDqBqQgPSQHiB6TVluPTFsB1UmPDAA9wAGu49DXO+H9ozbIm44jT2VMDpMzHupnbtBbuIpUNqwh8+Zc0+ywCxrtr1rLaqTXPjSGbDOVO+jTl8yOU0WRgR5UtYfEIyAkmQQYzAnQEEE/H5UQw+OGURp69DsfhSxQlyX7yCh19BUjYwHTMvxH5mh17GjlNM2hEi5h7AmiluwIoFhsYJ3ovbxOlFMDQHx3GgvOtcBx0MYmkLE48ux1rfDYoggis7VFujr2ExQYb0St3JpH4DjcwFNuGercdaSucL1e14te1QUyob9TVDerjhe4vsaSsQssafOJWpBpVv4PxUZRO6Bb2Kt4XD1aaxFWcNarrXQIfYQ4UkGmSxQPAJrR6yKjBdlpKAcTcviraLEZCWnYIScx89VT1mNjof5H0oKtkBnvXdz4VBIhUUkLvpJ0MnbyqlAksYVAWe5MjYTz0EHoddABpEVz3tnjXW3C6tdDXHIn2IUJPQBWRR68jNNvFMfmy21lVaczezCL7WWYO2mbYA6TtSD2k4qtwXHBXPdhUVQYSygiSxH2iTAHIjnFDfgop+RKa0NSxk/wCf9qp3uVXL50jyk+7lUCqNC3JfzmtCIM7V9FeECYJTGru7H45f+mnI8PQmYk0lfRris2Ct9VZ1Pudo+RFPSXwBWd55PTTj8Vn4JbVoAgCqnFL4ziTtVDH8a7u4qZSZViWEQI2nWddY05Glpe07NiSHtvkgw2VSunUzI+FJVrMQ0cVN+TH62gZfI1RvcEtPui/AVtwXFZrSNsGEj+Ek5flFXLuIgU68XPZPKVYgdawFu3OVQPcKT+2RBRx1Uj5Ux4/HxMmuedreJyGAPI1BtOkkalLUts5uzFWdRtvRLBcVLqLdzUgQrxJjkrdR0oM5lyepq1hrBIJ6NB9+xr0TzC7iMUhkXE1B9pWhh6zM++ocBj2tvKRlOjK4zK6ncOo3rLlsNBb0JPI+dR/UnIJQTl3y6+/0pWkOm16HXhXHVuA29VzSFLnQHLqmeAG5Qdzz11LLdBMQQF5QDMctwJ95rnHBnYMpRc4bwujDc8wOhgaGnfD4ruUVkLPbJhUdSGUn7OYMduRjyI3Iy3Kl9GiW6RbceTH3gfLX86oXA51Ab4aD1PKmHC3UuoGt+IGeZOo3EDnVfFYUsfEDPnP60qYGgPhnINHbFw5RUGGwHi2o9a4cIGlFLRGcVL6mrmGJmqoTX30X4fhZrqfQUMfZ5iIp+wWwpT4JhYinHCpAoR7OsuqK2isRakCGqkyOKjdas92a8NquOBd+zNCcRg6ZXQa6jTfUaetDsTdt/wDET8QP5VRVKXbJOWxev4aKywlXcfiLKgE3EE+f+RVPBY2xcbKl1GPRSD+W1Tu160aIf4CWDTWjFkUqjtBYRiozuQYIRGbXf7IPUfGiPDO0lt7i2jbuozA5O8R0zRvGdRIkgaTuKnDLNDCRQvFsMxd4hPYUmPFmIG+mYkCPX1mtxbj1y3eXD4ew1+4VL5QyjwiJPiZRAzLz+0Ko3F4ncIYYNUhiwz3UENBEwrtqJMVTt+kL69itxy7dvX3QBoAIbXJCAhnJnUA//nTlSlj3BdyuqIMq5dAT5eU/lT3xXguNsWWe7YQW0QZmt3O9e2iDVyLigwABJUkwvlUHZvss+MW4UezbRHCS9lrjM2RHZhFxQB4wI8qCmvLMKPkXic3KSrE7nfqB0HQf1qpcVjEDeu6Wvo2b7WMj/wBPDW0/5y9Inbrhi4a5csC490IlhgzhAyu7OWAyKumQLp51bWu2v/SGp+i79FeIIS9bP2XV/c6lfzT511HD61xj6M78Ym6k+0gb8DRH+/5V1rEi5kPd+3ByztPnUOTqmauPuUSca7oiGOsESBOWhmC4TY8IJVzE6jf3GlPFcO4q7AhbZXWVFxgSepMAioFwfFFZc1pIn/iEE+YLa0rje8NMykvHWdVUKFAHIUOxt+AaFdm8ViXU98hSNASynN+EmrPFSYpLvoWYysYt8Vxm+tIPaByQZ3Y/rTlj01JO1JXHcUqOpK5gDqsxPvqfDrsp+oeT2UX4M6QzajyGgGh/Wq2FxCh3Uaqwkfymfymp+J9oXvKLaqFWAvViB1PKha2yDPMan/PfXox5Z93s8vkc+X2+glibgVip2b4GqiOyNKkiNoMGKs4kG4iMIJCxr+7VNHB0Oh60woXwfFXUySDmIBJAzSIZWn7wJ39RzNNmHxRaxcPdiCC4ZQcocEypA9k5gCBAEzSFaueFlMbyCRPkR/nnTrw+2vdpcVmRHQZ1mYeIYwfswV35OCNNKz8qzs0cT3oahcWzcF4TluQLiL4QSfZcjXbYnpHSi6PZc7lT+74lPuIBB+VL2DbRUkMIiGByjT7J3URGgPuphwWGtRCqZHMtII1jVSPnFTjsayfD2Rm0+U0Ty+VDc+Xp7v6/3qZHMVfMIbpx6xhQW1Yb+dNHDcLbAksdN9KXsMni99FeIsy2cqHKzkKG6FjlB9xIPurG9ppFpGbhOLe6xXB2HuhTDOSqop5gsxAJ8hJHMUxW8JxJROSx/Cbp+E91+tHLPDu4w3cYXKhW2VtFhIVspysw3bxanmdaSMLxLjHD0ufWsM+MUlStxLqsF0IbRLefKdD7Gmta1+mlL5/7IPlb/Af4Lx03Lj2Ltvu7ye0h6aGQZIIhgQRuD5GtMFxO7i79xLDKqWoDOVLAs2ygAiTAJ30BXrXPcX2juXr1zGBAjPbW0iW3LyfEBBKrLHPA03in60F4PwxneGuhSzR/5mJuQAo5xmKqOiqOlLPEqeN9Ian4rc7ZJ2gt4nDYd7/1gtkykqEyjLnUMZzE6KSfdQvh2IOOxbWmuOqCwHhGC+KUUgmDp4jtTU4GMwMHbEYb/wC23y/FXPvovvFsXJ0JwhkdD3luR8Zo1wSqWLoE23LfyiXtXgDZxVrDYd7ma+gUZnZyGa4FzjNsFXMxj7tOlnsdgVEGwrebs9wn1zk1DiOE97xRMQw8NjDQs/8AEuu4keYRW/GKI8H4quIOIyRFnENZkcyiW2b/AHOw91WXHKbaXsSrppdiN9HvDUvXbr3EVksA2kDqGGcuxbQjdUW3+M1Q7TYsHGXjaQQmTD20QKud92AjmXuBP5KeeFYZeH4S87DXvMTfflJZ3ZR65Ai+6lXsBwo3bxv3NRaJYnk2JuS7t/KHJ9XHSo3PqF8lIrt2/gc+AcPt4LD2rJYZ2Pib795gXcj4NA5BQOVBvpAt5GwuIA1S6yE/uuub/mtqPfVnj/C8XexmHuW8gs2HV/E5BLEw5yhTMJIGo9pqt9tsN3mCu9UAuD/22Dn5A/GqWvtawSOqT0C9mR3vE8Td5JaVAf43gx/8IrTtvxzGW8QlnCZs3dhgq2e8zuzsFUsQQq+HU6QDMirn0eWIXEXPvXQoPUIi/qzVYPar/wDt+qi1K953feZ/td33ns5dhtvScdL6c680e197xbhY7Y8QFnBXSxGd7bW7a75rtxSqqBuRJk9ACap/Rph8mAQ83e609RnZFP4VWqf0n4a2LCXyq94lxQrx4spVi6zzBA26ij/AcI1nAWbaDxph0AB0l8g3P8VVT+7+iJYvH/kT+I9gMVfu3bj4tIe47KrLefKrMSi5e8VRCwNByrlfHl7vLaXLAu3gSi5A/duUV4kkSAdJO9dKHZjjTgG5iiCBqRjb6ctTltWwPnXMOKDMEcbd2sCSdWJO51JO8mlr2uikrp9m3Y/Gd1jbTHQMSh/nEL/uy13jAvmWa+bVQzXW+w/axbgFu4YuAaz9qPtL+o5HyqXLPaotw105GXieGxAYm1z38/OOtV7OCxLGXknrOgHpTGmPQivbmPRRqQKji/3GlclpZhBYsFFg0K4tdAMVvjuPIoOutJvE+NliSKhyWvSKccvdor8bxgFc64xeLtPnTFjHe4aB8Uw+UqD1JNaP0qSr9zP+rba/YG2U1Hu+dE8P4rmuxkfHb9KHWhLRRG0P2cjfWPca3M89El5MkRsZkfdYbj3iCPJvKhj2yDHwovdcOmf7JgPH2WHsv7pPqDVR0jcajf8AQjyI1oDGmGtllbTVRm84BAMfGfdTd2TxXtIdVCzlOspOpC9UOp/d9BQPCoGAYTIB1Gkj7Sno0fGrnC/BeQPoM8rodQwglSN9DMDXw1PkWorx9Mcu6gAjKQumaEGn2fUxtNFcJdAAIUlh1cmZ3hRpt+VU8Oj2tMwZG6DKRPKD4W9xHKjOHFrTK1xzqYgCOUmTpUOMpZNnkTr8h8hU6PpXlrCswhVgdSNfjU/+lt1rUpbRmVL5OXYNNavY6y99reEtoHe7mgFsg8KuzSx28Kt8qjwlrWrL3LmHv2cXaQO1pjKEkBlZWVlkTEqzQYMEDSsEY7WmvvHnsPXOP8X4ZZR8ati9bNxbalrpW6CUdvHcVMhEIdSJ23mae+zfFxjMMmIVGQPm8LQfZYrII0KmJB5iKUbn0k4Z1yvgsQ20qVsMs8tTc/ShvFe22LxCm3hbP1dTobhYNcC9EAGW2fOWjl1r0PKV8mT6dP4w37M8JXE8XxV5VHcYfEMViMrYgqoMdcrZ3P7zIaau0uM4Vcizjb+HJtvm7t7wUq+UgEorAzlY79aRez3F8dg8OMPYsWQFLEuwdmd2MszeMa/oBW3D+zVy5muXfE7szu3VnJZj8Tty0FK+SV6G+m/5n/c6hwO/h3sJ9VZGsqMiFDKgJ4co9IikHsVhe64xirXJEvx/C961cQfhuAe6quGwGOwym3ZxTImZmyqts+JjLGWtk6nXestcEvM7Xmv3e9cZWdWZHZRlhSUK6eFdPKlfInnQy4s3tHRu0HEvq2Gu3tyqHKOrnwovvYqPfSp9Fv7OxiFdhP1jMWJAktZs5mPmSCap4bs6XI7y5dfUHxu76jb22NEMR2UtE5u7BPmAfzFK7t1qXR2Qpa3sl7e8TVrC2bbozO65gHWAqkN4jPhBbINeU1Pg+JYbCYQW7N23ddVMBWDd5dYyScvIsSfIelU7fA0UaIB7orxeHgNEVOqtNvr/AADrMILnG8cVJFxQYMZba78vamjt/tNYdCjJdOZSrAJHtCCPER1rS1hFiK1/04TSzVL+bf6nUk/gH9nuMDC4dbRtOzgsWIKAEsxP3p2jlQ2wHF8YkW8xF57mUkgeMOAMwB2DDWOVMV7BBQTzj/J8qrYlMls5VMZTkkwXhZBgeID3DeSRS1uJb69DT8/uBO0nFnxlvurioihs3hLOZCssHQaeI1mI7Y4oad7bWOSWT/1OaDYi8qW3bcs4yEbEANmK+U6T5UuYnF5oiPPTzP6V01Te6x/BJehlxna3EuCpxVyCCCEt2VkHQ65CR8aT+IG2xAGiqAAPICBUOJxoXbf8v70PfFGrzLfbYtVixInZEGwNT8Fj6zbgbsR8VI/WhpvE6VNw1yt20+wFxNf5gKep+1k5r7kzqMuuxNRX3uRvV7JpXhWRXkHsi5iEY+1Q97ZYwKZL1gmajweAlpigjmC8NwvTalrtRh8pX3105cNANIvbO3DKeU/2rR+nb+otM/6hfYxMtJDBumYn0UGjGEtjKVO4J/sfeIqHCIpDiJ8DD8RRf+qvcZie7uHyJHTbSflXqHmYV7V3uLhzCUbRh5HnVu7hRGa340+6D4lHPJPtr+7v8zQ7HYnMIjUnX+1VsPinQ+Ex5cvhXAC+HRx/4fi5wDqR/AdfgDRrgXeNmRSQTJyEuhOm3h1/P0oVgOKByA62T0Fy2x18mTUesURfjq22i2iIw6Peg+mcx+VLS0pLSHzBJea0GLcsrNmUbQBLyAZEcx6UQ4dhQT7TNryJKT6nc0icI4063O9ecraHUlZP2Swhl8uWsa10rhUMA6zB+XlFJxR92DctfbqD+FtQKl7utrG1SyK3GLTkmGtgHai6WAwiKH2E1o1hlrwWeqV7HBVJmPlRjB8HUVLhhRC3WiGyFIgHDU6Vcs2VUaCtxXtVEInsKdxWJZXpUhrUiuXsDJbaAbVZLiqiPWzvWmfRF+zzEuIoXn1qxiXocr61HlXRSAnaerCtQ20+tXEP/eRpWZIszTGvJW3AMnM86AImst5ZsvrqKCcXxaqjFwzM4IUmNE2LAHSeY9fIzf4hiEtq7kgJbWWY+Lxbiep2575eVJOKvXL5W5ckd5Lqhgnu48L3CYgncDSF6ToWPE9gXjOLe5tCoNBDSPcNCfWOZpaxGIjQGfOjfE7ttSAZcDcL4VJ8mmW9RFL+KxIJ8KBfIfrT8cjcjRVaTWIkkDmakw9hnPQdflAFF7HDQAWA/rFaEjM2U7WEGg+J5k+XlUnELOW4ltAMwZRpr4pE/D+tF8Ei28ztrkWR/EdFjzr3sVgTiMVcuMJCISJ18bMoH+0t8aFvxlsMT5UkP1kyteosaGsy5I8qmCivIw9bSC7bHIVJhbIGtbuZrdBFFLs5vo8vAxSP2/sRbVv3gPjNdCtJmpX7f4LNhXIHsQfcDr+X5VbiWUmQ5HstHM7JAtP94ugHpIY/8oFQ8QTPcMCBJ/PnXmEcZgrcyPjyouFkbeNGLLPsuukq3wOvUmvSPOwqDgdxQS2oWM40LKCJDxzQ9Qap3+DuhgjlIIkhl+8p+PwNF7/EcpUrpuUnYAnxW2H3Z5ehFSNiiWKAeFvEiySEc6lVbfK0adDROxABsA6APspOjjaejdKnxVhyPGJ038utEnu5Q2XxBtHQxrP2XHXo3OhvfMqZQSVEkBtfD016VwDzheKuWyVRyFMBhOkEx7uRn0runZ+/mth40Lbgk+hM8+R9J2Ncf7N8PsX2IdiGNu4SNEQFWt5MrE6sQX30kAc5p24ZjX4dc7vvDdtnKQIiUcSjzPhJEiDGsbg1y+2tG/1T4nTLd3Sve8ofbxS3FV0MqwBBj8xyNb96a1zjWmOljxiPZuJPtL8RRfDXk++v4hXN+xXB8PefEXcWpOHw9hrlwKWUlifAAVg65X+Ao9h+xeGHFMVhXQtZTDPfsgM4Mfs8pLAywBZxqTMV5n8KvybfrfsPuHxNv76/iH9av28Tb++n4l/rXEeE8GsXOFYrFOs3bV2wttpIAV3tBgUBynRm3FNfFezvB7ePXh5w11GcIExCXmaGuA5QUeRvAnXcVSeBL5A+X9jpIxFv76fiX+te/WLf30/Ev9a5G3Ya0uGuLlBxK8QXCrclsuR+7CkpMbPm68pq2OBcHGM/0w2LxuSLZxXeEftSmYfsvYjltvy5030l+RfM6mlxW9lgY3gg/lW0Vz76MMAcNdx9hom3dtoSBAOXvQGjzEH30/u9TaysDuow1qz8qgvXoqkMeA0E1aSVBJ7YO9VLmFXcaVs+JFereEa11TqDLwhsqZq24Maf5/Wqtlxm0NWb1xVRmM5QDMAk+gA1NZcNGi5xfDC7ct2iC1lR3jAyO8dmbKsR4l0YwOXKNlftRj9WQOianMBMmNy7gQAPug7mAZolxfjTMf2IU6KphocA6BCNCBtMfpSrhsF9YvWrRkK5OdjAObUj2vsqevPNTzGso68UUFwNy4jXPCqAau5ykywQMASObD461qvDECgg5pG+sFiY3P2ZI2nemHjVom0tsZQbKEt0cEoxKnmsBCOuU8zSujsLytqyEeIFidYMsJ211+O2wupSM7tsKWsIvhykEa+sjWYA0ERqf0q45CKCsEsNt9D+VbYl0Nt2Dpp4VCspJLRLQOUfnVnDIjZrh9i3aLtOxKoFUepYoPUiqJCNgXjF7urISfE5Dt/CBCCfPMadvo74WbeHDsPFcOvoQW+WtIOFBxeKtI8nNcXOeoZ9vIeIV3DCYUIiqNANvhFZebt4aOLpNlHE4PNOnKqq2pRTz2PqNKOshqBrEAepPxrHXGa55AUtg1ZtYWrV5VG1bokiguPsLt4eW8PFDe0OA7y06KJNxcpU89N55QB8qNLbiqeOQgO5+yjE+QUFsvqY193lV1JHy7Pnu5Y8R8iRI8jFWe+YHOCTHtR5bmKI4fBwHV/aDwZ6sSD8wTWqYHQENumbl9mN/PefStZlIRaFwHaNDM6awAwnlrB6e6t7OEYZrZ0e3t1GUjX4RUeFU2867BWlT5H9Ks4fGnNDeE5WUneUykKJ8tAD0A6VwSpxG14zcXTQSP3dCR7v0FQXsOJE8w0+oH9qK4sCc3Vjp8QR6a15xLKiICIZvDPP2RJ+DCiLgJw1nu7hDeyDqNR7tKZL11jZBsoXd1VfEA7W7KFvZA1OZt2gQBEQxobibQe4bexlQT0knOT6an3VvY1bvEzCAGWDBVAQLag8jlAPvrsOTwdOwHFGM2nMhvEs7rGh0nUc499PJt1yvgXEH8F8oGZrzLmPhJEHQ5YB0BEnXWunWsUuUanbr/aqceronyZXZyfgHapMHgbluys4m7eVmLor2xbUAAanU6Hl9ryoyPpAsm9hsS9t2uDDvh8Wqqqhkcowa2c2sMpMGNGNe1lA4C8T4zgrWCfBYEX2W7dW5duX8gICFSiKF31RdY67zoc4n2r4W+MGPFvE3byhe7tsES2GQEKzGS2kzz15VlZXABI7ZzhXBzfWmx64sHKMgylCFmZ0yxEbc6IHtPwo4r/Ue6xH1n2u4lO6N0LlD594jX55ZrKyuCEvovxr3rmNu3PbuXEdo2lu9MDyEx7qe7r15WVnv2Un0COIYiAaS+JcRYMYNZWU8E79kGG7WXE8LeIedFsL2ga6OnlEVlZRp9HT7GPB3CqhmnX2QPaYxMKOfP4HpSpx7tG1zMUcAIxCqpPJfaPJp193ISc2VlZjXAnYzjhdmS6qF5jvFUrJGhz92yZumYHlsd6O8MGTulDLqDHivbPlJ0IPVvcaysrVJGvYe7V27ZUXUMv3UPlBMJORHYnbXYHeDSHhcYuHb9pbZkI8LLrHkwJE9dZ9Dyysp2SLlvieHusEV1XMRJZUUzyk5UHzpoxFru8JdtSh7wIQQxzhXZGBZGQG2v7PQncsAJkMMrKKOBPY/ChsXaAnS6kDyRXuN6aqK7E6wPePnp+tZWVn5vZfjPDUdwTWVlQNCIDbqa0KyspUFks/L5nkP88qg4oQti8XIAFpyzfyNJrKyqr2Rfo4xxBCpzc2Jn+bKRHvIqsl3KZ5b9euYR6zWVlaGRRbZ7ao4aPGmRTpoTqp+B3pcbFFHKtujaTzE6D86ysofIX6CVhVuHwE6wcvMCeR51HdDtiFuODlWWVT0XqP5RWVlE4oWbhdnckksGE9M2k/M0ZF/Jh71zQZsgX0JOUD0VF+NZWUUIy9iD3eFwVrZ2c3D5CDBPxNF+G8cXJBeIZhvymR+ce6vayqz7J0j//Z" alt="" />
        <div className="footer__songInfo">
            <h4>Saawre!</h4>
            <p>Arijit Singh</p>
        </div>
        </div>
        <div className="footer__center">
        <ShuffleIcon ClassName="footer__green"/>
        <SkipPreviousIcon ClassName="footer__icon"/>
        <PlayCircleOutlineIcon fontSize="large" ClassName="footer__green"/>
        <SkipNextIcon ClassName="footer__icon"/>
        <RepeatIcon ClassName="footer__green"/>
        </div>
        <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
        </div>
        </div>
    )
}

export default Footer