<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="MadLibs.css">
    <title>Mad Libs</title>
</head>
<body>
    <div class="container">
        <header id="intro" class="center">
            <h1 >Spongebob Madlib</h1>
        </header>

        <main>
            <!-- Main MadLibs Form Input Area -->
            <form id="madlibs-form" name="madlibs-form" onsubmit="submitMadLibs(event)">
                <section id="madlibs-inputs">
                    <div class="input-group">
                        <label for="number">fruit</label>
                        <input type="text" id="number" name="number">
                    </div>
                    
                    <div class="input-group">
                        <label for="adjective_1">noun</label>
                        <input type="text" id="adjective_1" name="adjective_1">
                    </div>
        
                    <div class="input-group">
                        <label for="noun_1">name</label>
                        <input type="text" id="noun_1" name="noun_1">
                    </div>
        
                    <div class="input-group">
                        <label for="noun_2">adjective</label>
                        <input type="text" id="noun_2" name="noun_2">
                    </div>
                    
                    <div class="input-group">
                        <label for="noun_3">color</label>
                        <input type="text" id="noun_3" name="noun_3">
                    </div>
        
                    <div class="input-group">
                        <label for="adjective_2">adjective</label>
                        <input type="text" id="adjective_2" name="adjective_2">
                    </div>
        
                    <div class="input-group">
                        <label for="noun_4">adjective</label>
                        <input type="text" id="noun_4" name="noun_4">
                    </div>
        
                    <div class="input-group">
                        <label for="sport_1">noun</label>
                        <input type="text" id="sport_1" name="sport_1">
                    </div>
        
                    <div class="input-group">
                        <label for="sport_2">verb</label>
                        <input type="text" id="sport_2" name="sport_2">
                    </div>
        
                    <div class="input-group">
                        <label for="sport_3">verb</label>
                        <input type="text" id="sport_3" name="sport_3">
                    </div>
        
                    <div class="input-group">
                        <label for="beverage">noun</label>
                        <input type="text" id="beverage" name="beverage">
                    </div>

                    <div class="input-group">
                        <label for="beverage_1">verb</label>
                        <input type="text" id="beverage_1" name="beverage_1">
                    </div>
        
                    <div class="input-group">
                        <label for="food">animal</label>
                        <input type="text" id="food" name="food">
                    </div>
                </section>
                
                <section id="madlibs-submit">
                    <button type="submit">
                        Generate
                    </button>
                </section>
            </form>

            <section id="completed-story" class="hide"></section>
        </main>
    </div>
    
    
    <!-- JS Script inclusion -->
    <script src="MadLibs.js"></script>
</body>
</html>
