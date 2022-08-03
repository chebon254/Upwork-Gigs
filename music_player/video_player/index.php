<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- <link rel="stylesheet" href="https://cdn.plyr.io/3.7.2/plyr.css" /> -->
    <link rel="stylesheet" href="plyr.css">
    <link rel="stylesheet" href="custom.css">
    <style>
        body{
            margin: 0px;
            height:300px
        }
        #player{
            height:300px
        }
    </style>
</head>
<body onload="applyAppleStyle()">
    <div class="plyr__video-embed " id="player">
    <iframe src="https://www.youtube.com/embed/<?=$_REQUEST['id']?>?origin=http:////localhost:8080/" allowfullscreen allowtransparency picture-in-picture allow="autoplay; picture-in-picture; "></iframe>
    <script src="https://cdn.plyr.io/3.7.2/plyr.js"></script>
    <script>
        const player = new Plyr('#player', {
            //debug:true,
            speed: {
                selected: 1,
                options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
            },
            controls: [
                'play-large',
                'rewind',
                'play',
                'fast-forward',
                'progress',
                'current-time',
                'mute',
                'volume',
                'settings',
                'fullscreen',
            ],
        });
    </script>
    <script src="appleStyle.js"></script>
</body>
</html>